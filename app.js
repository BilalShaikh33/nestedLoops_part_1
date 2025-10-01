        // for (var i = 0; i < 3; i++) {
        //     var star = ""
        //     for (var j = 0; j < 3; j++) { 
        //     star = star+ "*"


        //     }
        //     console.log(star , "\n")
        // }




        // for (var i = 0; i < 4; i++) {
        //     var b = 0
        //     var a = ""
        //     for (var j = 0; j < 4; j++) {
        //         a += b+1
        //         b++


        //     }
        //     console.log(a)
        // }


        // var a = ""
        // for (var i = 0; i < 4; i++) {
        //     for (var j = 0; j < 1; j++) {

        //         a = a + " " + "*"
        //     }
        //     console.log(a)
        // }



        // var n = prompt("Enter how many numbers you want to print")

        // for (var i = 0; i < n; i++) {
        //     var b = 1
        //     var a = ""
        //     for (var j = 0; j < n; j++) {
        //         a += b
        //         b++


        //     }
        //     console.log(a)
        //     }



        // for (var i = 1; i < 10; i++) {
        //     for (var j = 0; j < 1; j++) {

        //         console.log(i , "*", i , "=" ,i * i)


        //     }
        // }



        // var b = 0
        // var a = ""
        // for (var i = 0; i < 4; i++) {
        //     for (var j = 0; j < 1; j++) {
        //         a += b+1
        //         b++


        //     }
        //     console.log(a)
        // }


        var a = "****"
        for (var i = 4; i > 0 ; i--) {
            var b = ""
            for (var j = 0; j < 1; j++) {
               b += a.slice(0,i)
               
               console.log(b)
            }

            }
        