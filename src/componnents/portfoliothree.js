export const Portfoliothree=()=>{
    class loss{
    
        constructor(A,B){
this.a=A
this.b=B
        }

    }
    function largestnumber(a){
        var f=a[0]
        for(var i=0;i<a.length;i++){
          if(a[i]>f)
          {
              f=a[i]
          }  
        }
        console.log(f)
    } 
    largestnumber([1,5,7,2,5,2,3,8,33,44,555,22,44,6,222,666,333,11,0,6,4,333332,666,444])
    return(
        <>
     
<section class="skills">
    <div class="skills-block">
        <div class="section_title_about">
            <h2 class="section_title ">
               My Skills
            </h2>
            <div class="underline"></div>
        </div>
        <div class="skills-container">
            <p class="row1">HTML5 <i class="fab fa-html5" aria-hidden="true"></i></p>
            <p class="row2">CSS <i class="fab fa-css3" aria-hidden="true"></i></p>
            <p class="row3">JavaScript <i class="fab fa-js-square"></i></p>
            <p class="row4">Sass <i class="fab fa-sass"></i></p>
            <p class="row5">jquery <i class="fas fa-code"></i></p>
            <p class="row6">Bootstrap <i class="fab fa-bootstrap"></i></p>
            <p class="row7">React <i class="fab fa-react"></i></p>
            <p class="row8">Redux <i class="fas fa-sitemap"></i></p>
            <p class="row9">Git <i class="fab fa-git-alt"></i></p>
            <p class="row10">Github <i class="fab fa-github"></i></p>
        </div>
    </div>

</section>


</>
    )
}
export default Portfoliothree