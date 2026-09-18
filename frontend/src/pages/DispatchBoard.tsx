import { HexagonBackground } from "@/components/animate-ui/components/backgrounds/hexagon";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import axios from "axios"
import FullCalendar from "@fullcalendar/react";
import themePlugin from "@fullcalendar/react/themes/monarch"; // YOUR THEME
import dayGridPlugin from "@fullcalendar/react/daygrid";
import type { EventClickInfo, EventDisplayInfo } from "@fullcalendar/react";
import '@fullcalendar/react/skeleton.css'; // ALWAYS NEED SKELETON
import '@fullcalendar/react/themes/monarch/theme.css'; // YOUR THEME
import '@fullcalendar/react/themes/monarch/palettes/purple.css'; // YOUR THEME'S PALETTE
import '@/styles/dispatch-calendar.css'; // neutral black chrome override

type Job = Record<string, unknown>;

const STATUS_COLORS: Record<string, string> = {
    "Work Order": "#3b82f6",
    Quote: "#f59e0b",
    Completed: "#22c55e",
    Unsuccessful: "#ef4444",
};

const FALLBACK_COLOR = "#a1a1aa";

function statusColor(status: unknown) {
    return STATUS_COLORS[status as string] ?? FALLBACK_COLOR;
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatDate(value: unknown) {
    if (typeof value !== "string" || value.startsWith("0000-00-00")) return "—";
    const [datePart, timePart = ""] = value.split(" ");
    const [year, month, day] = datePart.split("-").map(Number);
    if (!year || !month || !day) return "—";

    const date = `${day} ${MONTHS[month - 1]} ${year}`;
    const [hours, minutes] = timePart.split(":").map(Number);
    if (!hours && !minutes) return date;

    const suffix = hours < 12 ? "am" : "pm";
    const hour12 = hours % 12 === 0 ? 12 : hours % 12;
    return `${date}, ${hour12}:${String(minutes).padStart(2, "0")}${suffix}`;
}

function formatMoney(value: unknown) {
    const amount = Number(value);
    if (Number.isNaN(amount)) return "—";
    return amount.toLocaleString("en-AU", { style: "currency", currency: "AUD" });
}

function formatFlag(value: unknown) {
    if (value === true || value === 1 || value === "1") return "Yes";
    if (value === false || value === 0 || value === "0") return "No";
    return "—";
}

function formatText(value: unknown) {
    if (value === null || value === undefined || value === "") return "—";
    return String(value);
}

type FieldType = "text" | "date" | "money" | "flag";

type Field = { key: string; label: string; type?: FieldType; wide?: boolean };

const SECTIONS: { title: string; fields: Field[] }[] = [
    {
        title: "Job details",
        fields: [
            { key: "job_description", label: "Job description", wide: true },
            { key: "work_done_description", label: "Work done", wide: true },
        ],
    },
    {
        title: "Location",
        fields: [
            { key: "job_address", label: "Job address" },
            { key: "billing_address", label: "Billing address" },
        ],
    },
    {
        title: "Schedule",
        fields: [
            { key: "date", label: "Scheduled start", type: "date" },
            { key: "job_is_scheduled_until_stamp", label: "Scheduled until", type: "date" },
            { key: "quote_date", label: "Quoted", type: "date" },
            { key: "work_order_date", label: "Work order raised", type: "date" },
            { key: "completion_date", label: "Completed", type: "date" },
            { key: "unsuccessful_date", label: "Marked unsuccessful", type: "date" },
        ],
    },
    {
        title: "Billing",
        fields: [
            { key: "total_invoice_amount", label: "Invoice total", type: "money" },
            { key: "purchase_order_number", label: "PO number" },
            { key: "ready_to_invoice", label: "Ready to invoice", type: "flag" },
            { key: "invoice_sent", label: "Invoice sent", type: "flag" },
            { key: "invoice_date", label: "Invoice date", type: "date" },
            { key: "quote_sent", label: "Quote sent", type: "flag" },
            { key: "payment_amount", label: "Payment amount", type: "money" },
            { key: "payment_method", label: "Payment method" },
            { key: "payment_date", label: "Payment date", type: "date" },
            { key: "payment_received", label: "Payment received", type: "flag" },
            { key: "payment_processed", label: "Payment processed", type: "flag" },
            { key: "payment_note", label: "Payment note", wide: true },
        ],
    },
];

function formatField(job: Job, field: Field) {
    const value = job[field.key];
    switch (field.type) {
        case "date": return formatDate(value);
        case "money": return formatMoney(value);
        case "flag": return formatFlag(value);
        default: return formatText(value);
    }
}

export function DispatchBoard() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [activities, setActivities] = useState<Job[]>([]);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const [jobsResult, activitiesResult] = await Promise.all([
                axios.get("http://localhost:5000/get/jobs"),
                axios.get("http://localhost:5000/get/job-activities"),
            ])
            setJobs(jobsResult.data)
            setActivities(activitiesResult.data)
        }
        fetchData()
    }, [])

    const jobsByUuid = new Map(jobs.map((job) => [job.uuid as string, job]));

    const events = activities
        .filter((activity) => activity.active === 1 && activity.activity_was_scheduled === 1)
        .flatMap((activity) => {
            const job = jobsByUuid.get(activity.job_uuid as string);
            if (!job) return [];
            return [{
                id: activity.uuid as string,
                title: (job.billing_address as string) || (job.job_address as string) || "Job",
                start: activity.start_date as string,
                end: activity.end_date as string,
                color: statusColor(job.status),
                contrastColor: "#ffffff",
                extendedProps: { job },
            }];
        });

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="relative h-svh overflow-hidden" data-color-scheme="dark">
                <HexagonBackground className="fixed inset-0 flex items-center justify-center" />
                <SidebarTrigger className="absolute top-2 left-2 z-10" />

                <div className="relative z-10 flex h-full w-full flex-col gap-3 p-6 pt-14">
                    <div className="flex flex-wrap items-center gap-4 rounded-lg border border-white/10 bg-black/70 px-4 py-2.5 backdrop-blur-md">
                        <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            Status
                        </span>
                        {Object.entries(STATUS_COLORS).map(([status, color]) => (
                            <span key={status} className="flex items-center gap-2 text-xs text-foreground">
                                <span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: color }} />
                                {status}
                            </span>
                        ))}
                    </div>

                    <div className="min-h-0 flex-1 rounded-xl border border-white/10 bg-black/70 p-4 shadow-2xl backdrop-blur-md">
                        <FullCalendar
                            plugins={[themePlugin, dayGridPlugin]}
                            initialView="dayGridMonth"
                            headerToolbar={{
                                left: "prev,next today",
                                center: "title",
                                right: "dayGridMonth,dayGridWeek,dayGridDay",
                            }}
                            events={events}
                            eventDisplay="block"
                            eventClick={(arg: EventClickInfo) => setSelectedJob(arg.event.extendedProps.job as Job)}
                            eventContent={(info: EventDisplayInfo) => (
                                <div
                                    className="flex w-full min-w-0 items-center gap-1.5 overflow-hidden rounded-[3px] py-0.75 pr-1.5 pl-1.5"
                                    style={{ backgroundColor: info.color }}
                                >
                                    {info.timeText && (
                                        <span className="shrink-0 text-[11px] text-white/70">{info.timeText}</span>
                                    )}
                                    <span className="truncate text-xs font-medium text-white">
                                        {info.event.title}
                                    </span>
                                </div>
                            )}
                            height="100%"
                            dayMaxEvents={true}
                        />
                    </div>
                </div>

                <Dialog open={!!selectedJob} onOpenChange={(open) => !open && setSelectedJob(null)}>
                    <DialogContent className="max-w-2xl gap-0 overflow-hidden p-0">
                        {selectedJob && (
                            <>
                                <div className="h-1.5 w-full" style={{ backgroundColor: statusColor(selectedJob.status) }} />
                                <DialogHeader className="gap-2 p-5 pb-4">
                                    <div className="flex items-center gap-3">
                                        <DialogTitle className="text-lg">
                                            Job #{formatText(selectedJob.generated_job_id)}
                                        </DialogTitle>
                                        <span
                                            className="rounded-full px-2.5 py-0.5 text-xs font-medium text-white"
                                            style={{ backgroundColor: statusColor(selectedJob.status) }}
                                        >
                                            {formatText(selectedJob.status)}
                                        </span>
                                    </div>
                                    <p className="whitespace-pre-line text-sm text-muted-foreground">
                                        {formatText(selectedJob.job_address)}
                                    </p>
                                </DialogHeader>

                                <div className="max-h-[65vh] overflow-y-auto">
                                    {SECTIONS.map((section) => (
                                        <div key={section.title} className="border-t border-border px-5 py-4">
                                            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                                {section.title}
                                            </h3>
                                            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                                                {section.fields.map((field) => (
                                                    <div
                                                        key={field.key}
                                                        className={`flex flex-col gap-0.5 ${field.wide ? "col-span-2" : ""}`}
                                                    >
                                                        <span className="text-xs text-muted-foreground">
                                                            {field.label}
                                                        </span>
                                                        <span className="whitespace-pre-line wrap-break-word text-sm text-foreground">
                                                            {formatField(selectedJob, field)}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </DialogContent>
                </Dialog>
            </SidebarInset>
        </SidebarProvider>
    )
}
