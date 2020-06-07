class Form{
constructor(){
    this.input =createInput();
    this.button =createButton('Submit');
  
    this.greeting =createElement('h2');
this.title =createElement('h2')
}
display(){
this.title.html("Book Locater");
this.title.position(100,10);

this.button.position(470,210);
this.input.position(300,210);
 
this.greeting.html("Enter your name");
this.greeting.position(300,130);


}}