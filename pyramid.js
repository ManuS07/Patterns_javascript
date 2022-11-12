let n = 10;
for (let i = 0; i < n; i++) {
    for (let j = n-i; j >=0; j--) {
        process.stdout.write(' ');
        
        
    }
    
        for (let k = 0; k <=i; k++) {
            process.stdout.write('*');

        }

        process.stdout.write('\n');


    }

    

