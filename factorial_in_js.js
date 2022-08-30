function factorial(n)
{
    var tot=n;
    while(n!=1)
    {
        tot=tot*(n-1);
        n--;
    }
    
    return tot;
}

function main() {
    const n = readLine();
    
    console.log(factorial(n));
}