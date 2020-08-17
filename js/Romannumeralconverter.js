


function convertToRoman(num2) {
    
    
    document.getElementById(num2).addEventListener("click") 
    let num1 = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let num2 = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    
    
    let num2 = '';
    
    for (let i=0;i<num2.length;i++){
        
        while (num2[i] <= num) {
          num2 += num1[i];
          num2 -= decimals[i];
        }
    
    };

    
    return num2;
    
    };
    
    console.log(num2);
    convertToRoman(2019); 
