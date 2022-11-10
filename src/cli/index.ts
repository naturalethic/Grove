#!/usr/bin/env node

import { program } from "commander";
import dev from "./dev.js";

program.name("grove").version("0.0.1").description("Grove CLI");
program.command("dev").description("Start the development server").action(dev);
program.parse();
