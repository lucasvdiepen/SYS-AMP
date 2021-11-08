class GraphBackground{
    constructor(){
        this.alpha = 0.4;
    }

    draw()
    {
        context.strokeStyle = "rgba(145,61,136," + this.alpha + ")";

        for(let i = 0; i < height; i++)
        {
            if(i % 20 == 0)
            {
                if(i % 100 == 0)
                {
                    context.lineWidth = "5";
                }
                else
                {
                    context.lineWidth = "1";
                }
                
                context.beginPath();
                context.moveTo(0, i);
                context.lineTo(width, i);
                context.closePath();
                context.stroke();
            }
        }

        for(let i = 0; i < width; i++)
        {
            if(i % 20 == 0)
            {
                if(i % 100 == 0)
                {
                    context.lineWidth = "5";
                }
                else
                {
                    context.lineWidth = "1";
                }

                context.beginPath();
                context.moveTo(i, 0);
                context.lineTo(i, height);
                context.closePath();
                context.stroke();
            }
        }
    }
}