import { add } from "additionmodule";
import { substract } from "substractionmodule";
import { multiply } from "multiply";
import { divide } from "divisionmodule";
import { modulus } from "modulus";

console.log("Add 5 + 4 = " + add(4, 5));
console.log("Substract 5 - 4 = " + substract(5, 4));
console.log("Multiply 5 * 4 = " + multiply(5, 4));
console.log("Division 20 / 4 = " + divide(20, 4));
console.log("Modulus 21 % 5 = " + modulus(21, 5));
