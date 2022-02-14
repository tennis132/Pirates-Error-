class Cannon
{
    contructor(a,b,c,d,angle)
    {
this.x = a
this.y = b
this.w = c
this.h = d
this.angle = angle

this.cannon_image = loadImage("assets/canon.png")
this.cannonbaseimage = loadImage("assets/cannonBase.png")
    }

    display()
    {
push ()
translate (this.x, this.y)
rotate (this.angle)
imageMode (CENTER)
image(this.cannon_image, 0, 0,this.w, this.h)
pop ()
rect(70, 20, 200, 200)
noFill()
 }
}