import { renderToPipeableStream } from "react-dom/server";
import Root from "./root";

export async function render(url: string) {
    return renderToPipeableStream(<Root />);
}
