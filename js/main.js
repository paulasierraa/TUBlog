$(document).ready(function(){
    //SLIDER
    $('.bxslider').bxSlider({
        mode:'fade',
        captions:true,
        slideWidth:1200
    });
    //POSTS dinámicos
 
        var posts=[
            {
                title: 'Prueba de título 1',
                date: 'Fecha de publicación: ' +moment().date() + " de "+ moment().format("MMMM")+ " del "+moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis egestas nulla. Vivamus id tellus vel erat facilisis elementum rutrum at odio. Nam vel sodales odio, nec posuere lacus. Nunc et quam nec ligula interdum vehicula vitae ut ligula. Phasellus lorem massa, venenatis congue molestie id, finibus vitae justo. Donec commodo massa nec tincidunt bibendum. Curabitur tincidunt nulla sed nisi hendrerit, non pellentesque quam auctor. Morbi gravida enim imperdiet, suscipit orci a, luctus risus. Aenean a vestibulum tellus, sit amet pretium nisl. Pellentesque eu enim ornare, facilisis tellus eget, aliquam metus. Vivamus lacus quam, malesuada ac eros eget, lacinia rhoncus eros. Cras auctor, urna ac vestibulum consectetur, elit odio ullamcorper metus, id sollicitudin enim lorem vel arcu. Aenean tempor enim sed nibh convallis condimentum nec a odio'
            },
            {
                title: 'Prueba de título 2',
                date: 'Fecha de publicación: ' +moment().date() + " de "+ moment().format("MMMM")+ " del "+moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis egestas nulla. Vivamus id tellus vel erat facilisis elementum rutrum at odio. Nam vel sodales odio, nec posuere lacus. Nunc et quam nec ligula interdum vehicula vitae ut ligula. Phasellus lorem massa, venenatis congue molestie id, finibus vitae justo. Donec commodo massa nec tincidunt bibendum. Curabitur tincidunt nulla sed nisi hendrerit, non pellentesque quam auctor. Morbi gravida enim imperdiet, suscipit orci a, luctus risus. Aenean a vestibulum tellus, sit amet pretium nisl. Pellentesque eu enim ornare, facilisis tellus eget, aliquam metus. Vivamus lacus quam, malesuada ac eros eget, lacinia rhoncus eros. Cras auctor, urna ac vestibulum consectetur, elit odio ullamcorper metus, id sollicitudin enim lorem vel arcu. Aenean tempor enim sed nibh convallis condimentum nec a odio'
            },
            {
                title: 'Prueba de título 3',
                date: 'Fecha de publicación: ' +moment().date() + " de "+ moment().format("MMMM")+ " del "+moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis egestas nulla. Vivamus id tellus vel erat facilisis elementum rutrum at odio. Nam vel sodales odio, nec posuere lacus. Nunc et quam nec ligula interdum vehicula vitae ut ligula. Phasellus lorem massa, venenatis congue molestie id, finibus vitae justo. Donec commodo massa nec tincidunt bibendum. Curabitur tincidunt nulla sed nisi hendrerit, non pellentesque quam auctor. Morbi gravida enim imperdiet, suscipit orci a, luctus risus. Aenean a vestibulum tellus, sit amet pretium nisl. Pellentesque eu enim ornare, facilisis tellus eget, aliquam metus. Vivamus lacus quam, malesuada ac eros eget, lacinia rhoncus eros. Cras auctor, urna ac vestibulum consectetur, elit odio ullamcorper metus, id sollicitudin enim lorem vel arcu. Aenean tempor enim sed nibh convallis condimentum nec a odio'
            },
            {
                title: 'Prueba de título 4',
                date: 'Fecha de publicación: ' +moment().date() + " de "+ moment().format("MMMM")+ " del "+moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis egestas nulla. Vivamus id tellus vel erat facilisis elementum rutrum at odio. Nam vel sodales odio, nec posuere lacus. Nunc et quam nec ligula interdum vehicula vitae ut ligula. Phasellus lorem massa, venenatis congue molestie id, finibus vitae justo. Donec commodo massa nec tincidunt bibendum. Curabitur tincidunt nulla sed nisi hendrerit, non pellentesque quam auctor. Morbi gravida enim imperdiet, suscipit orci a, luctus risus. Aenean a vestibulum tellus, sit amet pretium nisl. Pellentesque eu enim ornare, facilisis tellus eget, aliquam metus. Vivamus lacus quam, malesuada ac eros eget, lacinia rhoncus eros. Cras auctor, urna ac vestibulum consectetur, elit odio ullamcorper metus, id sollicitudin enim lorem vel arcu. Aenean tempor enim sed nibh convallis condimentum nec a odio'
            }
        ]

        console.log(posts);
        posts.forEach((item,index)=>{
            var post = `
            <article class="post">
                <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                      ${item.content}
                    </p>
                <a hred="#" class="button-more">Leer más</a>
        </article>
            `;
            //agregamos la plantilla
            $("#posts").append(post);
        });

        //Selector de tema

        var styles = $("#theme")
        $("#to-green").click(function(){
            styles.attr("href","css/green.css");
        });
        $("#to-red").click(function(){
            styles.attr("href","css/red.css");
        });
        $("#to-blue").click(function(){
            styles.attr("href","css/blue.css");
        });
        //Scroll Arriba
        $('.to-up').click(function(e){
            e.preventDefault();
            $('html,body').animate({
                scrollTop:0
            }, 500);

            return false;
        });
});