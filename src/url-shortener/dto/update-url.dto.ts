import { PartialType } from "@nestjs/mapped-types";
import { createUrlDto } from "./create-url.dto";

export class UpdateUrlDto extends PartialType(createUrlDto) {};