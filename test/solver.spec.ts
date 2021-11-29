
import solver from '../src/solver'

it("basic case", ()=>{
    var output = solver("11 22")
    expect(output).toBe("11 22");
});

it("change order case", ()=>{
    var output = solver("22 11");
    expect(output).toBe("11 22");
});

it("same weights case", ()=>{
    var output = solver("90 180");
    expect(output).toBe("180 90");
});

it("emptry string case", ()=>{
    var output = solver("");
    expect(output).toBe("");
});

it("real problem case", ()=>{
    var output = solver("56 65 74 100 99 68 86 180 90");
    expect(output).toBe("100 180 90 56 65 74 68 86 99");
});