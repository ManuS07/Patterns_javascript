let n = 5;
let w = 30;
for (let i = 1; i <=n; i++) {
    if(i==1 || i == n){
        for (let j = 1; j <=w; j++) {
           process.stdout.write("* ");
            
        }
        console.log('\n');
    }
    else{
        process.stdout.write("* ");
        for (let j = 1; j <=w-2; j++) {
            process.stdout.write("  ");

           
            
        }
        process.stdout.write("* ");
        console.log('\n');
    }
    
}
