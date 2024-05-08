{
    //
    // type assertion


    // let name : any ;
    // name = "i am the greatest developer";
    // name =222;
    // (name as number).

    // lets work with function 

    const kgToGm =(value : string | number) : string |number | undefined =>
        {
            
            if(typeof value === "string")
                {
                    const gm = ( parseFloat(value) *1000)
                    return (`the value in gm ${gm}`)

                }
            else if(typeof value === "number")
                {
                    const gm = ( value*1000)
                    return gm

                }
        }

      const result = kgToGm("100") as string
      const result2 = kgToGm(100) as number

      console.log(result,result2)

    type CustomError = {
        message:string
    }

      try{

      }catch(error){
        console.log((error as CustomError).message)

      }



    //   ......................................interFace 
      





    //
}