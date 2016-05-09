
    function getQueryVariable(variable) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
    }

    var donated = getQueryVariable('donated');
    if(donated && donated === 'true'){
        //alert('thanks for donating');
        document.getElementById('thanks').style.display = "table";
        window.setTimeout(function(){
            $('#thanks').css('display', 'none');
        }, 3000)
    }
    
    // prevent overscrolling on touch devices
    document.ontouchmove = function(event){
        event.preventDefault();
    }

    var stageH = window.innerWidth > 600 ? window.innerWidth - 120 : window.innerWidth - 60;
    var stageV = window.innerWidth > 600 ? window.innerHeight - 120 : window.innerHeight - 60;

    Physics(function (world) {
        // bounds of the window
        var viewportBounds = Physics.aabb(0, 0, stageH, stageV),
            edgeBounce,
            renderer,
            width = window.innerWidth,
            height = window.innerHeight;

        // create a renderer
        renderer = Physics.renderer('canvas', {
            el: 'pitch'
        });

        // add the renderer
        world.add(renderer);
        // render on each step
        world.on('step', function () {
            world.render();
        });

        // constrain objects to these bounds
        edgeBounce = Physics.behavior('edge-collision-detection', {
            aabb: viewportBounds
            ,restitution: 0.4
            ,cof: 0.3
        });

        var resizeId;

        // resize events
        window.addEventListener('resize', function () {
            viewportBounds = Physics.aabb(0, 0, renderer.width, renderer.height);
            edgeBounce.setAABB(viewportBounds);
        }, true);

        var iconWidth = renderer.width > 600 ? renderer.width/30 : 20;
        var ballWidth = renderer.width > 600 ? renderer.width/30 : 15;
        // /****************** GOALS *******************/

        var goal1 = Physics.body('rectangle', {
            treatment: 'static'
            ,x: renderer.width > 600 ? 0 : renderer.width/2
            ,y: renderer.width > 600 ? renderer.height * 0.5 : 0
            ,vx: 0.3
            ,width: renderer.width > 600 ? 10 : 150
            ,height: renderer.width > 600 ? 150 : 10
            ,styles: {
                fillStyle: '#fff'
            }
            ,label: "goal1"
        });

        var goal2 = Physics.body('rectangle', {
            treatment: 'static'
            ,x: renderer.width > 600 ? renderer.width : renderer.width/2
            ,y: renderer.width > 600 ? renderer.height * 0.5 : renderer.height
            ,vx: 0
            ,width: renderer.width > 600 ? 10 : 150
            ,height: renderer.width > 600 ? 150 : 10
            ,styles: {
                fillStyle: '#fff'
            }
            ,label: "goal2"
        });





        // /****************** BALL AND PLAYERS *******************/
        var ball = Physics.body('circle', {
            x: renderer.width * 0.5
            ,y: renderer.height * 0.5
            ,vx: 0
            ,vy: 0
            ,radius: ballWidth/2
            ,styles: {
                fillStyle: '#cb4b16',
                src: 'assets/ball.png',
                width: ballWidth,
                height: ballWidth
            }
            ,mass: 0.2
            ,restitution: 1
            ,label: "ball"
        });









        Physics.body('player', 'circle', function( parent ){

            

            var defaults = {
                radius: iconWidth,
                styles: {

                },
                mass: 1,
                restitution: 0.1
            };

            return {
                // optional initialization
                init: function( options ){
                    options = Physics.util.extend({}, defaults, options);
                    options.styles.width = iconWidth*2;
                    options.styles.height = iconWidth*2;
                    parent.init.call(this, options);
                }
            };

        });









        var player1 = Physics.body('player', {
            x: renderer.width > 600 ? renderer.width * 0.284 : renderer.width * 0.8,
            y: renderer.width > 600 ? renderer.height * 0.27 : renderer.height * 0.3,
            styles: {
                src: 'assets/fabric.png'
            }
        });

        var player2 = Physics.body('player', {
            x: renderer.width > 600 ? renderer.width * 0.424 : renderer.width * 0.6,
            y: renderer.width > 600 ? renderer.height * 0.27 : renderer.height * 0.3,
            styles: {
                src: 'assets/DOMINO.svg'
            }
        });

        var player3 = Physics.body('player', {
            x: renderer.width > 600 ? renderer.width * 0.58 : renderer.width * 0.4
            ,y: renderer.width > 600 ? renderer.height * 0.27 : renderer.height * 0.3
            ,styles: {
                src: 'assets/NINJA.svg'
            }
        });

        var player4 = Physics.body('player', {
            x: renderer.width > 600 ? renderer.width * 0.72 : renderer.width * 0.2
            ,y: renderer.width > 600 ? renderer.height * 0.27 : renderer.height * 0.3
            ,styles: {
                src: 'assets/HEAVENLY.svg'
            }
        });

        var player5 = Physics.body('player', {
            x: renderer.width > 600 ? renderer.width * 0.284 : renderer.width * 0.8
            ,y: renderer.width > 600 ? renderer.height * 0.5 : renderer.height * 0.4
            ,styles: {
                src: 'assets/BELLA-UNION.svg', // could be 80x80... if you want pixel ratio 2
            }
        });

        var player6 = Physics.body('player', {
            x: renderer.width > 600 ? renderer.width * 0.424 : renderer.width * 0.6
            ,y: renderer.width > 600 ? renderer.height * 0.5 : renderer.height * 0.4
            ,styles: {
                src: 'assets/4AD.svg', // could be 80x80... if you want pixel ratio 2
            }
        });

        var player7 = Physics.body('player', {
            x: renderer.width > 600 ? renderer.width * 0.58 : renderer.width * 0.4
            ,y: renderer.width > 600 ? renderer.height * 0.5 : renderer.height * 0.4
            ,styles: {
                src: 'assets/R&S.svg', // could be 80x80... if you want pixel ratio 2
            }
        });

        var player8 = Physics.body('player', {
            x: renderer.width > 600 ? renderer.width * 0.72 : renderer.width * 0.2
            ,y: renderer.width > 600 ? renderer.height * 0.5 : renderer.height * 0.4
            ,styles: {
                src: 'assets/BONAFIDE.svg', // could be 80x80... if you want pixel ratio 2
            }
        });

        var player9 = Physics.body('player', {
            x: renderer.width > 600 ? renderer.width * 0.284 : renderer.width * 0.8
            ,y: renderer.width > 600 ? renderer.height * 0.734 : renderer.height * 0.6
            ,styles: {
                src: 'assets/BRFC.svg', // could be 80x80... if you want pixel ratio 2
            }
        });

        var player10 = Physics.body('player', {
            x: renderer.width > 600 ? renderer.width * 0.424 : renderer.width * 0.6
            ,y: renderer.width > 600 ? renderer.height * 0.734 : renderer.height * 0.6
            ,styles: {
                src: 'assets/LAST-FM.svg', // could be 80x80... if you want pixel ratio 2
            }
        });

        var player11 = Physics.body('player', {
            x: renderer.width > 600 ? renderer.width * 0.58 : renderer.width * 0.4
            ,y: renderer.width > 600 ? renderer.height * 0.734 : renderer.height * 0.6
            ,styles: {
                src: 'assets/RA.svg', // could be 80x80... if you want pixel ratio 2
            }
        });

        var player12 = Physics.body('player', {
            x: renderer.width > 600 ? renderer.width * 0.72 : renderer.width * 0.2
            ,y: renderer.width > 600 ? renderer.height * 0.734 : renderer.height * 0.6
            ,styles: {
                src: 'assets/SECRETLY.svg', // could be 80x80... if you want pixel ratio 2
            }
        });

        var player13 = Physics.body('player', {
            x: renderer.width > 600 ? renderer.width * 0.144 : renderer.width * 0.8
            ,y: renderer.width > 600 ? renderer.height * 0.377 : renderer.height * 0.7
            ,styles: {
                src: 'assets/MIXMAG.svg', // could be 80x80... if you want pixel ratio 2
            }
        });

        var player14 = Physics.body('player', {
            x: renderer.width > 600 ? renderer.width * 0.144 : renderer.width * 0.6
            ,y: renderer.width > 600 ? renderer.height * 0.623 : renderer.height * 0.7
            ,styles: {
                src: 'assets/MUTE.svg', // could be 80x80... if you want pixel ratio 2
            }
        });

        var player15 = Physics.body('player', {
            x: renderer.width > 600 ? renderer.width * 0.856 : renderer.width * 0.4
            ,y: renderer.width > 600 ? renderer.height * 0.377 : renderer.height * 0.7
            ,styles: {
                src: 'assets/PRS.svg', // could be 80x80... if you want pixel ratio 2
            }
        });

        var player16 = Physics.body('player', {
            x: renderer.width > 600 ? renderer.width * 0.856 : renderer.width * 0.2
            ,y: renderer.width > 600 ? renderer.height * 0.623 : renderer.height * 0.7
            ,styles: {
                src: 'assets/VF.svg', // could be 80x80... if you want pixel ratio 2
            }
        });
        
        var players = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14, player15, player16];
        world.add(players);
        world.add([ball, goal1, goal2, edgeBounce]);

        var tch = Physics.behavior('interactive', { el: renderer.container }).applyTo( players );
        world.add(tch);
        var accel = Physics.behavior('constant-acceleration').applyTo( ball );
        world.add(accel);
        var resp = Physics.behavior('body-impulse-response').applyTo( players );
        world.add(resp);
        world.add( Physics.behavior('body-collision-detection') );
        world.add( Physics.behavior('sweep-prune') );
        // subscribe to ticker to advance the simulation
        Physics.util.ticker.on(function( time ) {
            world.step( time );
        });
        // query to find a collision between a body with label "bullet" and a body with label "box"
        var query = Physics.query({
            $or: [
                { bodyA: { label: 'ball' }, bodyB: { label: 'goal1' } }
                ,{ bodyB: { label: 'ball' }, bodyA: { label: 'goal1' } }
                ,{ bodyA: { label: 'ball' }, bodyB: { label: 'goal2' } }
                ,{ bodyB: { label: 'ball' }, bodyA: { label: 'goal2' } }
            ]
        });

        // world.on('interact:grab', function( data, e ){
        //     window.clearTimeout(showhand);
        // });

        // monitor collisions
        world.on('collisions:detected', function( data, e ){
            var found = Physics.util.find( data.collisions, query );
            if ( found ){
                // SOMEONE SCORED A GOAL!!!!!
                a.play();
                ball.state.pos.x = renderer.width * 0.5;
                ball.state.pos.y = renderer.height * 0.5;
                ball.state.vel.set(0, 0);

                players[0].state.pos.x = renderer.width > 600 ? renderer.width * 0.284 : renderer.width * 0.8
                players[0].state.pos.y = renderer.width > 600 ? renderer.height * 0.27 : renderer.height * 0.3;
                players[0].state.vel.set(0, 0);
                players[1].state.pos.x = renderer.width > 600 ? renderer.width * 0.424 : renderer.width * 0.6
                players[1].state.pos.y = renderer.width > 600 ? renderer.height * 0.27 : renderer.height * 0.3;
                players[1].state.vel.set(0, 0);
                players[2].state.pos.x = renderer.width > 600 ? renderer.width * 0.58  : renderer.width * 0.4
                players[2].state.pos.y = renderer.width > 600 ? renderer.height * 0.27 : renderer.height * 0.3;
                players[2].state.vel.set(0, 0);
                players[3].state.pos.x = renderer.width > 600 ? renderer.width * 0.72 : renderer.width * 0.2
                players[3].state.pos.y = renderer.width > 600 ? renderer.height * 0.27 : renderer.height * 0.3;
                players[3].state.vel.set(0, 0);
                players[4].state.pos.x = renderer.width > 600 ? renderer.width * 0.284 : renderer.width * 0.8
                players[4].state.pos.y = renderer.width > 600 ? renderer.height * 0.5 : renderer.height * 0.4;
                players[4].state.vel.set(0, 0);
                players[5].state.pos.x = renderer.width > 600 ? renderer.width * 0.424 : renderer.width * 0.6
                players[5].state.pos.y = renderer.width > 600 ? renderer.height * 0.5 : renderer.height * 0.4;
                players[5].state.vel.set(0, 0);
                players[6].state.pos.x = renderer.width > 600 ? renderer.width * 0.58 : renderer.width * 0.4
                players[6].state.pos.y = renderer.width > 600 ? renderer.height * 0.5 : renderer.height * 0.4;
                players[6].state.vel.set(0, 0);
                players[7].state.pos.x = renderer.width > 600 ? renderer.width * 0.72 : renderer.width * 0.2
                players[7].state.pos.y = renderer.width > 600 ? renderer.height * 0.5 : renderer.height * 0.4;
                players[7].state.vel.set(0, 0);
                players[8].state.pos.x = renderer.width > 600 ? renderer.width * 0.284 : renderer.width * 0.8
                players[8].state.pos.y = renderer.width > 600 ? renderer.height * 0.734 : renderer.height * 0.6;
                players[8].state.vel.set(0, 0);
                players[9].state.pos.x = renderer.width > 600 ? renderer.width * 0.424 : renderer.width * 0.6
                players[9].state.pos.y = renderer.width > 600 ? renderer.height * 0.734 : renderer.height * 0.6;
                players[9].state.vel.set(0, 0);
                players[10].state.pos.x = renderer.width > 600 ? renderer.width * 0.58 : renderer.width * 0.4
                players[10].state.pos.y = renderer.width > 600 ? renderer.height * 0.734 : renderer.height * 0.6;
                players[10].state.vel.set(0, 0);
                players[11].state.pos.x = renderer.width > 600 ? renderer.width * 0.72 : renderer.width * 0.2
                players[11].state.pos.y = renderer.width > 600 ? renderer.height * 0.734 : renderer.height * 0.6;
                players[11].state.vel.set(0, 0);
                players[12].state.pos.x = renderer.width > 600 ? renderer.width * 0.144 : renderer.width * 0.8
                players[12].state.pos.y = renderer.width > 600 ? renderer.height * 0.377 : renderer.height * 0.7;
                players[12].state.vel.set(0, 0);
                players[13].state.pos.x = renderer.width > 600 ? renderer.width * 0.144 : renderer.width * 0.6
                players[13].state.pos.y = renderer.width > 600 ? renderer.height * 0.623 : renderer.height * 0.7;
                players[13].state.vel.set(0, 0);
                players[14].state.pos.x = renderer.width > 600 ? renderer.width * 0.856 : renderer.width * 0.4
                players[14].state.pos.y = renderer.width > 600 ? renderer.height * 0.377 : renderer.height * 0.7;
                players[14].state.vel.set(0, 0);
                players[15].state.pos.x = renderer.width > 600 ? renderer.width * 0.856 : renderer.width * 0.2
                players[15].state.pos.y = renderer.width > 600 ? renderer.height * 0.623 : renderer.height * 0.7;
                players[15].state.vel.set(0, 0);

                $('#goal').toggle();
                window.setTimeout(function(){
                    $('#goal').toggle();
                }, 1800)
            }
        });
    });
    
    
    var a = document.getElementsByTagName("audio")[1];

    (function($) {
        $.fn.rainbow = function(options) {
            this.each(function() {
                options.originalText = $(this).html();
                options.iterations = 0;
                if (!options.pauseLength) {
                    options.pauseLength = options.animateInterval;
                }
                $(this).data('options',options);
                if (options.pad) {
                    for (x = 0; x < options.originalText.length; x++) {
                        options.colors.unshift(options.colors[options.colors.length-1]);
                    }
                }
                $.fn.rainbow.render(this);      
            });
        }
        $.fn.rainbow.render = function(obj) {
                var options = $(obj).data('options');
                var chars = options.originalText.split('');
                options.iterations++;
                var newstr = '';
                var counter = 0;
                for (var x in chars) {
                    if (chars[x]!=' ') {
                        newstr = newstr + '<span style="color: ' + options.colors[counter] + ';">' + chars[x] + '</span>';
                        counter++;
                    } else {
                        newstr = newstr + ' ';
                    }
                    if (counter >= options.colors.length) {
                        counter = 0;
                    }
                }
                $(obj).html(newstr);
                var pause = (options.iterations % options.colors.length == 0);
                if (options.animate) {(
                        function(obj,interval) {
                            var options = $(obj).data('options');
                            var i = setTimeout(function() {
                                $.fn.rainbow.shift(obj);
                            },interval);
                            options.interval = i;
                            $(obj).data('options',options);
                        }
                    )(obj,pause?options.pauseLength:options.animateInterval);
                }
        }
        $.fn.rainbow.shift = function(obj) {
            var options = $(obj).data('options');
            var color = options.colors.pop();
            options.colors.unshift(color);
            $.fn.rainbow.render(obj);
        }
    })(jQuery);


    $(function() {
        $('#goal div div').rainbow({ 
                colors: [
                    '#FF0000',
                    '#f26522',
                    '#fff200',
                    '#00a651',
                    '#28abe2',
                    '#2e3192',
                    '#6868ff'
                ],
                animate: true,
                animateInterval: 100,
                pad: false,
                pauseLength: 100,
            });
        if (donated && donated === 'true') {
            $('#thanks div').rainbow({ 
                colors: [
                    '#FF0000',
                    '#f26522',
                    '#fff200',
                    '#00a651',
                    '#28abe2',
                    '#2e3192',
                    '#6868ff'
                ],
                animate: true,
                animateInterval: 100,
                pad: false,
                pauseLength: 100,
            });
        }

        $.ajax({
            url: "http://api.jo.je/virginmoneygiving/jsonp.php?d=574206&callback=?",
            dataType: 'json',
            success: function(data) {
                var totalTotal = data.money_gift_aid + parseFloat(data.money_total);
                $('.loader').remove();
                $('#sofar span').text(totalTotal);


                // animate centre line
                //$('#animatedline').css('top', 100-(totalTotal/15)+'%')
            }
        });

        $('#about').on('click', function(){
            $('#info').toggle();
        })

        $('#close').on('click', function(){
            $('#info').toggle();
        })
    });