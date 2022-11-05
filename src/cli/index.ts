import { program } from "commander";
import dev from "./dev";

program.name("grove").version("0.0.1").description("Grove CLI");
program.command("dev").description("Start the development server").action(dev);
program.parse();
