let varA = 'a';
let varB = 'b';
let varC = 'c';

varA = varB;
varB = varC;
varC = varA;

console.log(varA,varB,varC);
// ou [varA,VarB,VarC] = [varB, varC, varA] da o mesmo resultado(/t/g, '#') para colocar # em todos os T.

console.log