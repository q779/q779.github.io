declare class MatrixStack {
    private static matrixStack;
    private static depth;
    private static currentMatrix;
    private static tmp;
    static reset(): void;
    static loadIdentity(): void;
    static push(): void;
    static pop(): void;
    static getMatrix(): number[];
    static multMatrix(matNew: number[]): void;
}
export default MatrixStack;
