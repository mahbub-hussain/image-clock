     function myclock(){

            let day = new Date();
    
            let gethour= day.getHours();
            gethour=(gethour>12)?gethour-12:gethour;
            let getminute = day.getMinutes();
    
            let getsecond = day.getSeconds();
         
    
            let second1_img=[
             "no0.png","no0.png","no0.png","no0.png","no0.png","no0.png","no0.png","no0.png","no0.png","no0.png",
             "no1.png","no1.png","no1.png","no1.png","no1.png","no1.png","no1.png","no1.png","no1.png","no1.png",
             "no2.png","no2.png","no2.png","no2.png","no2.png","no2.png","no2.png","no2.png","no2.png","no2.png",
             "no3.png","no3.png","no3.png","no3.png","no3.png","no3.png","no3.png","no3.png","no3.png","no3.png",
             "no4.png","no4.png","no4.png","no4.png","no4.png","no4.png","no4.png","no4.png","no4.png","no4.png",
             "no5.png","no5.png","no5.png","no5.png","no5.png","no5.png","no5.png","no5.png","no5.png","no5.png"
             ];
             
            let second2_img=[
             "no0.png","no1.png","no2.png","no3.png","no4.png","no5.png","no6.png","no7.png","no8.png","no9.png",
             "no0.png","no1.png","no2.png","no3.png","no4.png","no5.png","no6.png","no7.png","no8.png","no9.png",
             "no0.png","no1.png","no2.png","no3.png","no4.png","no5.png","no6.png","no7.png","no8.png","no9.png",
             "no0.png","no1.png","no2.png","no3.png","no4.png","no5.png","no6.png","no7.png","no8.png","no9.png",
             "no0.png","no1.png","no2.png","no3.png","no4.png","no5.png","no6.png","no7.png","no8.png","no9.png",
             "no0.png","no1.png","no2.png","no3.png","no4.png","no5.png","no6.png","no7.png","no8.png","no9.png",
             ];
              /*ex: second1_img >> 13 second = index of 13 [no1.png] its mean img with number 1
                    second2_img >> 13 second = index of 13 [no2.png] its mean img with number 2
                    so >> second1 && second2 = 13 sec.
               */
            let gethour1_img=[
             "no1.png","no0.png","no0.png","no0.png","no0.png","no0.png","no0.png","no0.png","no0.png","no0.png","no1.png",
             "no1.png","no1.png"
             ];
            let gethour2_img=[
             "no2.png","no1.png","no2.png","no3.png","no4.png","no5.png","no6.png","no7.png","no8.png","no9.png","no0.png",
             "no1.png","no2.png"
             ];
    
             
            let hour1 = gethour1_img[gethour];
            let hour2 = gethour2_img[gethour];
    
            let second1 = second1_img[getsecond];
            let second2 = second2_img[getsecond];
    
            let minute1 = second1_img[getminute]; 
            let minute2 = second2_img[getminute]; 
             
    
            let addhour ="<img  src=img/"+hour1+"><img  src=img/"+hour2+">";
             
             let addminute = "<img src=img/"+minute1+"><img  src=img/"+minute2+">"
             
             let addsecond = "<img  src=img/"+second1+"><img  src=img/"+second2+">"
             
              
             let adddot = "<img class='semicol' src='img/semicol.png'>";
    
          
             document.getElementById("clock1").innerHTML= (addhour + adddot + addminute + adddot+ addsecond )
    
             setTimeout(myclock,1000)
            } 
            myclock()
    
    
            function myclock2(){
                
                let day = new Date();
        
                let gethour= day.getHours();
                gethour=(gethour>12)?gethour-12:gethour;
        
                let getminute = day.getMinutes();
        
        
                let getsecond = day.getSeconds();
                
        
                let second1_img=[
                 "hm0.png","hm0.png","hm0.png","hm0.png","hm0.png","hm0.png","hm0.png","hm0.png","hm0.png","hm0.png",
                 "hm1.png","hm1.png","hm1.png","hm1.png","hm1.png","hm1.png","hm1.png","hm1.png","hm1.png","hm1.png",
                 "hm2.png","hm2.png","hm2.png","hm2.png","hm2.png","hm2.png","hm2.png","hm2.png","hm2.png","hm2.png",
                 "hm3.png","hm3.png","hm3.png","hm3.png","hm3.png","hm3.png","hm3.png","hm3.png","hm3.png","hm3.png",
                 "hm4.png","hm4.png","hm4.png","hm4.png","hm4.png","hm4.png","hm4.png","hm4.png","hm4.png","hm4.png",
                 "hm5.png","hm5.png","hm5.png","hm5.png","hm5.png","hm5.png","hm5.png","hm5.png","hm5.png","hm5.png"
                 ];
                 
                let second2_img=[
                 "hm0.png","hm1.png","hm2.png","hm3.png","hm4.png","hm5.png","hm6.png","hm7.png","hm8.png","hm9.png",
                 "hm0.png","hm1.png","hm2.png","hm3.png","hm4.png","hm5.png","hm6.png","hm7.png","hm8.png","hm9.png",
                 "hm0.png","hm1.png","hm2.png","hm3.png","hm4.png","hm5.png","hm6.png","hm7.png","hm8.png","hm9.png",
                 "hm0.png","hm1.png","hm2.png","hm3.png","hm4.png","hm5.png","hm6.png","hm7.png","hm8.png","hm9.png",
                 "hm0.png","hm1.png","hm2.png","hm3.png","hm4.png","hm5.png","hm6.png","hm7.png","hm8.png","hm9.png",
                 "hm0.png","hm1.png","hm2.png","hm3.png","hm4.png","hm5.png","hm6.png","hm7.png","hm8.png","hm9.png",
                 ];
        
                   
                let gethour1_img=[
                 "hm1.png","hm0.png","hm0.png","hm0.png","hm0.png","hm0.png","hm0.png","hm0.png","hm0.png","hm0.png","hm1.png",
                 "hm1.png","hm1.png",
                 ];
                let gethour2_img=[
                 "hm2.png","hm1.png","hm2.png","hm3.png","hm4.png","hm5.png","hm6.png","hm7.png","hm8.png","hm9.png","hm0.png",
                 "hm1.png","hm2.png",
                 ];
        
                 
    
                let hour1 = gethour1_img[gethour];
                let hour2 = gethour2_img[gethour];
            
                let second1 = second1_img[getsecond];
                let second2 = second2_img[getsecond];
        
                let minute1 = second1_img[getminute]; 
                let minute2 = second2_img[getminute]; 
                 
        
                let addhour ="<img  src=img/"+hour1+"><img class='hour2' src=img/"+hour2+">";
                 
                 let addminute = "<img src=img/"+minute1+"><img  src=img/"+minute2+">"
                 
                 let addsecond = "<img  src=img/"+second1+"><img  src=img/"+second2+">"
                  
           
                 let adddot2 = "<img class='dot2' src='img/dot2.png'>";
        
              
                 document.getElementById("clock2").innerHTML= (addhour + adddot2 + addminute + adddot2+ addsecond )
        
                 setTimeout(myclock2,1000)
                } 
                myclock2()
            