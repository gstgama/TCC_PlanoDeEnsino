import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

export class SugestaoPlanoEnsinoModel{
    cdSugestaoPlanoEnsino!: number;
    cdDisciplina!: number;
    dsSugestaoPlanoEnsino!: string;
    dsInclusaoBasica!: string;
    dsExclusaoBasica!: string;
    dsInclusaoComplementar!: string;
    dsExclusaoComplementar!: string;
    dtCadastroSugestao!: Date;
}