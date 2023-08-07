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
    ./Images/0002.png
    ./Images/0003.png
    ./Images/0004.png
    ./Images/0005.png
    ./Images/0006.png
    ./Images/0007.png
    ./Images/0008.png
    ./Images/0009.png
    ./Images/0010.png
    ./Images/0011.png
    ./Images/0012.png
    ./Images/0013.png
    ./Images/0014.png
    ./Images/0015.png
    ./Images/0016.png
    ./Images/0017.png
    ./Images/0018.png
    ./Images/0019.png
    ./Images/0020.png
    ./Images/0021.png
    ./Images/0022.png
    ./Images/0023.png
    ./Images/0024.png
    ./Images/0025.png
    ./Images/0026.png
    ./Images/0027.png
    ./Images/0028.png
    ./Images/0029.png
    ./Images/0030.png
    ./Images/0031.png
    ./Images/0032.png
    ./Images/0033.png
    ./Images/0034.png
    ./Images/0035.png
    ./Images/0036.png
    ./Images/0037.png
    ./Images/0038.png
    ./Images/0039.png
    ./Images/0040.png
    ./Images/0041.png
    ./Images/0042.png
    ./Images/0043.png
    ./Images/0044.png
    ./Images/0045.png
    ./Images/0046.png
    ./Images/0047.png
    ./Images/0048.png
    ./Images/0049.png
    ./Images/0050.png
    ./Images/0051.png
    ./Images/0052.png
    ./Images/0053.png
    ./Images/0054.png
    ./Images/0055.png
    ./Images/0056.png
    ./Images/0057.png
    ./Images/0058.png
    ./Images/0059.png
    ./Images/0060.png
    ./Images/0061.png
    ./Images/0062.png
    ./Images/0063.png
    ./Images/0064.png
    ./Images/0065.png
    ./Images/0066.png
    ./Images/0067.png
    ./Images/0068.png
    ./Images/0069.png
    ./Images/0070.png
    ./Images/0071.png
    ./Images/0072.png
    ./Images/0073.png
    ./Images/0074.png
    ./Images/0075.png
    ./Images/0076.png
    ./Images/0077.png
    ./Images/0078.png
    ./Images/0079.png
    ./Images/0080.png
    ./Images/0081.png
    ./Images/0082.png
    ./Images/0083.png
    ./Images/0084.png
    ./Images/0085.png
    ./Images/0086.png
    ./Images/0087.png
    ./Images/0088.png
    ./Images/0089.png
    ./Images/0090.png
    ./Images/0091.png
    ./Images/0092.png
    ./Images/0093.png
    ./Images/0094.png
    ./Images/0095.png
    ./Images/0096.png
    ./Images/0097.png
    ./Images/0098.png
    ./Images/0099.png
    ./Images/0101.png
    ./Images/0102.png
    ./Images/0103.png
    ./Images/0104.png
    ./Images/0105.png
    ./Images/0106.png
    ./Images/0107.png
    ./Images/0108.png
    ./Images/0109.png
    ./Images/0110.png
    ./Images/0111.png
    ./Images/0112.png
    ./Images/0113.png
    ./Images/0114.png
    ./Images/0115.png
    ./Images/0116.png
    ./Images/0117.png
    ./Images/0118.png
    ./Images/0119.png
    ./Images/0120.png
    ./Images/0121.png
    ./Images/0122.png
    ./Images/0123.png
    ./Images/0124.png
    ./Images/0125.png
    ./Images/0126.png
    ./Images/0127.png
    ./Images/0128.png
    ./Images/0129.png
    ./Images/0130.png
    ./Images/0131.png
    ./Images/0132.png
    ./Images/0133.png
    ./Images/0134.png
    ./Images/0135.png
    ./Images/0136.png
    ./Images/0137.png
    ./Images/0138.png
    ./Images/0139.png
    ./Images/0140.png
    ./Images/0141.png
    ./Images/0142.png
    ./Images/0143.png
    ./Images/0144.png
    ./Images/0145.png
    ./Images/0146.png
    ./Images/0147.png
    ./Images/0148.png
    ./Images/0149.png
    ./Images/0150.png
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 149;
  
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
      trigger: `#page>canvas`,
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
    var hRatio = canvas.width / img.width;
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
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })