function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


// Custom cursor ==================================================================
let mouseCursor = document.querySelector(".cursor");
let btn = document.querySelectorAll("button");

window.addEventListener("mousemove", cursor);

function cursor(cursorPointer){
  gsap.to(mouseCursor, 0.4, {
    x: cursorPointer.clientX,
    y: cursorPointer.clientY,
  });
}



//------------------------------------------------------------------------------------
// Loader

function loader(){
  document.addEventListener("readystatechange",function(){
      if(document.readyState==="complete"){
        gsap.to('.loader-img', {
          opacity: 0,
          duration:.5
        })  
        gsap.to(".loader", {
            height: "0%",
            delay:.5,
            ease:"easeInOut"
          })

      }
  })
}
loader();


// -----------------------------------------------------------------------------------------------


function canvas(){
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
      ./image/male0001.png
      ./image/male0002.png
      ./image/male0003.png
      ./image/male0004.png
      ./image/male0005.png
      ./image/male0006.png
      ./image/male0007.png
      ./image/male0008.png
      ./image/male0009.png
      ./image/male0010.png
      ./image/male0011.png
      ./image/male0012.png
      ./image/male0013.png
      ./image/male0014.png
      ./image/male0015.png
      ./image/male0016.png
      ./image/male0017.png
      ./image/male0018.png
      ./image/male0019.png
      ./image/male0020.png
      ./image/male0021.png
      ./image/male0022.png
      ./image/male0023.png
      ./image/male0024.png
      ./image/male0025.png
      ./image/male0026.png
      ./image/male0027.png
      ./image/male0028.png
      ./image/male0029.png
      ./image/male0030.png
      ./image/male0031.png
      ./image/male0032.png
      ./image/male0033.png
      ./image/male0034.png
      ./image/male0035.png
      ./image/male0036.png
      ./image/male0037.png
      ./image/male0038.png
      ./image/male0039.png
      ./image/male0040.png
      ./image/male0041.png
      ./image/male0042.png
      ./image/male0043.png
      ./image/male0044.png
      ./image/male0045.png
      ./image/male0046.png
      ./image/male0047.png
      ./image/male0048.png
      ./image/male0049.png
      ./image/male0050.png
      ./image/male0051.png
      ./image/male0052.png
      ./image/male0053.png
      ./image/male0054.png
      ./image/male0055.png
      ./image/male0056.png
      ./image/male0057.png
      ./image/male0058.png
      ./image/male0059.png
      ./image/male0060.png
      ./image/male0061.png
      ./image/male0062.png
      ./image/male0063.png
      ./image/male0064.png
      ./image/male0065.png
      ./image/male0066.png
      ./image/male0067.png
      ./image/male0068.png
      ./image/male0069.png
      ./image/male0070.png
      ./image/male0071.png
      ./image/male0072.png
      ./image/male0073.png
      ./image/male0074.png
      ./image/male0075.png
      ./image/male0076.png
      ./image/male0077.png
      ./image/male0078.png
      ./image/male0079.png
      ./image/male0080.png
      ./image/male0081.png
      ./image/male0082.png
      ./image/male0083.png
      ./image/male0084.png
      ./image/male0085.png
      ./image/male0086.png
      ./image/male0087.png
      ./image/male0088.png
      ./image/male0089.png
      ./image/male0090.png
      ./image/male0091.png
      ./image/male0092.png
      ./image/male0093.png
      ./image/male0094.png
      ./image/male0095.png
      ./image/male0096.png
      ./image/male0097.png
      ./image/male0098.png
      ./image/male0099.png
      ./image/male0100.png
      ./image/male0101.png
      ./image/male0102.png
      ./image/male0103.png
      ./image/male0104.png
      ./image/male0105.png
      ./image/male0106.png
      ./image/male0107.png
      ./image/male0108.png
      ./image/male0109.png
      ./image/male0110.png
      ./image/male0111.png
      ./image/male0112.png
      ./image/male0113.png
      ./image/male0114.png
      ./image/male0115.png
      ./image/male0116.png
      ./image/male0117.png
      ./image/male0118.png
      ./image/male0119.png
      ./image/male0120.png
      ./image/male0121.png
      ./image/male0122.png
      ./image/male0123.png
      ./image/male0124.png
      ./image/male0125.png
      ./image/male0126.png
      ./image/male0127.png
      ./image/male0128.png
      ./image/male0129.png
      ./image/male0130.png
      ./image/male0131.png
      ./image/male0132.png
      ./image/male0133.png
      ./image/male0134.png
      ./image/male0135.png
      ./image/male0136.png
      ./image/male0137.png
      ./image/male0138.png
      ./image/male0139.png
      ./image/male0140.png
      ./image/male0141.png
      ./image/male0142.png
      ./image/male0143.png
      ./image/male0144.png
      ./image/male0145.png
      ./image/male0146.png
      ./image/male0147.png
      ./image/male0148.png
      ./image/male0149.png
      ./image/male0150.png
      ./image/male0151.png
      ./image/male0152.png
      ./image/male0153.png
      ./image/male0154.png
      ./image/male0155.png
      ./image/male0156.png
      ./image/male0157.png
      ./image/male0158.png
      ./image/male0159.png
      ./image/male0160.png
      ./image/male0161.png
      ./image/male0162.png
      ./image/male0163.png
      ./image/male0164.png
      ./image/male0165.png
      ./image/male0166.png
      ./image/male0167.png
      ./image/male0168.png
      ./image/male0169.png
      ./image/male0170.png
      ./image/male0171.png
      ./image/male0172.png
      ./image/male0173.png
      ./image/male0174.png
      ./image/male0175.png
      ./image/male0176.png
      ./image/male0177.png
      ./image/male0178.png
      ./image/male0179.png
      ./image/male0180.png
      ./image/male0181.png
      ./image/male0182.png
      ./image/male0183.png
      ./image/male0184.png
      ./image/male0185.png
      ./image/male0186.png
      ./image/male0187.png
      ./image/male0188.png
      ./image/male0189.png
      ./image/male0190.png
      ./image/male0191.png
      ./image/male0192.png
      ./image/male0193.png
      ./image/male0194.png
      ./image/male0195.png
      ./image/male0196.png
      ./image/male0197.png
      ./image/male0198.png
      ./image/male0199.png
      ./image/male0200.png
      ./image/male0201.png
      ./image/male0202.png
      ./image/male0203.png
      ./image/male0204.png
      ./image/male0205.png
      ./image/male0206.png
      ./image/male0207.png
      ./image/male0208.png
      ./image/male0209.png
      ./image/male0210.png
      ./image/male0211.png
      ./image/male0212.png
      ./image/male0213.png
      ./image/male0214.png
      ./image/male0215.png
      ./image/male0216.png
      ./image/male0217.png
      ./image/male0218.png
      ./image/male0219.png
      ./image/male0220.png
      ./image/male0221.png
      ./image/male0222.png
      ./image/male0223.png
      ./image/male0224.png
      ./image/male0225.png
      ./image/male0226.png
      ./image/male0227.png
      ./image/male0228.png
      ./image/male0229.png
      ./image/male0230.png
      ./image/male0231.png
      ./image/male0232.png
      ./image/male0233.png
      ./image/male0234.png
      ./image/male0235.png
      ./image/male0236.png
      ./image/male0237.png
      ./image/male0238.png
      ./image/male0239.png
      ./image/male0240.png
      ./image/male0241.png
      ./image/male0242.png
      ./image/male0243.png
      ./image/male0244.png
      ./image/male0245.png
      ./image/male0246.png
      ./image/male0247.png
      ./image/male0248.png
      ./image/male0249.png
      ./image/male0250.png
      ./image/male0251.png
      ./image/male0252.png
      ./image/male0253.png
      ./image/male0254.png
      ./image/male0255.png
      ./image/male0256.png
      ./image/male0257.png
      ./image/male0258.png
      ./image/male0259.png
      ./image/male0260.png
      ./image/male0261.png
      ./image/male0262.png
      ./image/male0263.png
      ./image/male0264.png
      ./image/male0265.png
      ./image/male0266.png
      ./image/male0267.png
      ./image/male0268.png
      ./image/male0269.png
      ./image/male0270.png
      ./image/male0271.png
      ./image/male0272.png
      ./image/male0273.png
      ./image/male0274.png
      ./image/male0275.png
      ./image/male0276.png
      ./image/male0277.png
      ./image/male0278.png
      ./image/male0279.png
      ./image/male0280.png
      ./image/male0281.png
      ./image/male0282.png
      ./image/male0283.png
      ./image/male0284.png
      ./image/male0285.png
      ./image/male0286.png
      ./image/male0287.png
      ./image/male0288.png
      ./image/male0289.png
      ./image/male0290.png
      ./image/male0291.png
      ./image/male0292.png
      ./image/male0293.png
      ./image/male0294.png
      ./image/male0295.png
      ./image/male0296.png
      ./image/male0297.png
      ./image/male0298.png
      ./image/male0299.png
      ./image/male0300.png
  `;
    return data.split("\n")[index];
  }

  const frameCount = 300;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page1>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width-100;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page1>canvas",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `700% top`,
    // markers:true,
  });
}
canvas()







// ==================================================================================================
// ==================================================================================================

function page2(){
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
}
page2()

function page3(){
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
}
page3()


function page4(){
  gsap.to("#page4",{
    scrollTrigger:{
      trigger:`#page4`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
}
page4()

function page6(){
  gsap.to("#page6",{
    scrollTrigger:{
      trigger:`#page6`,
      start:`top 90%`,
      end:`top 70%`,
      scroller:`#main`,
      // markers:true,
      scrub:2
    },

    backgroundColor:"#171010",
    duration:3

  })
  
}
page6()