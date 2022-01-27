var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Fmaily Book","Ranbir Singh", "Diljeet Singh", "Rocky Singh", "Alia Singh", "Soni Singh"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [Cartoony Dad.webp, Cartoony Grandma.jpg, Cartoony mom.jpg, Cartoony boy.jpg];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [Tushant Singh, Kusum Singh, Shivani Singh, Shaurya Singh] ;
 
    document.getElementById("Cartoony Dad.webp").src = updatedImage;
    document.getElementById("Cartoony Grandma.jpg").src = updatedImage;
    document.getElementById("Cartoony mom.jpg").src = updatedImage;
    document.getElementById("Cartoony boy.jpg").src = updatedImage;

    document.getElementById("Tushant Singh").innerHTML = updatedName;
    document.getElementById("Kusum Singh").innerHTML = updatedName;
    document.getElementById("Shivani Singh").innerHTML = updatedName;
    document.getElementById("Shaurya Singh").innerHTML = updatedName;
}
