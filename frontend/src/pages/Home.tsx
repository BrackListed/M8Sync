import { HexagonBackground } from "../components/animate-ui/components/backgrounds/hexagon";

export function Home(){
    return(
        <div className="w-screen h-screen">
            <HexagonBackground className="absolute inset-0 flex items-center justify-center rounded-xl" />
        </div>
    )
}