import { HexagonBackground } from "@/components/animate-ui/components/backgrounds/hexagon";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export function DispatchBoard(){
    return(
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="relative overflow-hidden">
                <HexagonBackground className="absolute inset-0 flex items-center justify-center rounded-xl" />
                <SidebarTrigger className="absolute top-2 left-2 z-10" />
                
            </SidebarInset>
        </SidebarProvider>
    )
}