var skillNumber = document.getElementById('skillNumber')
var numeroSkillTest = skillNumber.textContent;

if (!empty($_POST["encuestaSkills"]))
function skillvalue(valueNumberSkill) {
  valueNumberSkill = parseInt(valueNumberSkill) + 25;
  return valueNumberSkill;
}

var numero = skillvalue(numeroSkillTest);
console.log(numero); // Imprime "148" (123 + 25)

skillNumber.textContent = numero