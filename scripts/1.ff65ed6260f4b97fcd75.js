(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"5SAi":function(e,t,i){},"GuD+":function(e,t,i){"use strict";i.r(t),i.d(t,"render_core",function(){return a});i("YEPY"),i("5SAi");var s=i("lG0c");function a(e){Object(s["bind"])(document.body)`
    <div class="latte-root section__work">
        <div class="latte-header" status="">
            <div class="static-header" status="n">
                <div class="latte-logo">Todd Oh</div>
            </div>
            <ul class="latte-menu" status="n">
                <li class="menu-action open">
                    <div alt="Navigation menu open icon"></div>
                </li>
                <li class="menu-action close">
                    <div alt="Navigation menu close icon"></div>
                </li>
                ${[{id:"nav-section-home",name:"home",path:""},{id:"nav-section-work",name:"work",path:"work"},{id:"nav-section-about",name:"about",path:"about"}].map(e=>`\n                    <li class="sections" data-sectionid="${e.id}"><a href="#${e.path}">${e.name}</a></li>\n                `)}
            </ul>
        </div>

        <div class="latte-workgrid">
            <div class="workgrid-header">
                <div class="engineering-header grid__sectionheader">
                    <p class="subheading">Engineering</p>
                    <p>I’m a full-stack developer having multiple experiences in production-level backend and frontend development including news aggregation system and automatic clustering tool.</p>
                    <p>Depending on what is needed to build a sophisticated product, I occasionally use different languages such as Python and Swift. My main stack is listed on about page.</p>
                </div>
                <div class="workgrid-action-jumpnext">
                    <div alt="Chevron heading right to jump to next section"></div>
                </div>
                <div class="design-header grid__sectionheader">
                    <p class="subheading">Design</p>
                    <p>Great design is the key element of a product that redefines the experience. Realizing that made me putting efforts into a whole range of design aspects.</p>
                    <p>All of my projects consist of a coherent interface experience and branding graphics, delivering true intention of each project.</p>
                </div>
            </div>

            <div class="workgrid-contents">
                <div class="workgrid-engineering">
                    <ul id="engineering__tiaa">
                        <li class="item-info">
                            <div class="productlogo" alt="Thisisallabout product logo"></div>
                            <p class="productheading">thisisallabout</p>
                            <p class="productdescription">The data-driven journalism project unravels complex issues and agendas by group, timeframe, and key topic using intelligent data analysis and great visualization.</p>
                            <p class="productdescription">I developed a full set of website and back-end including the algorithm that examines a wide range of media in order to create a qualified look at important issues.</p>
                            <ul class="productworkperiod">
                                <li>
                                    <p class="subheading">Period </p>
                                    <p>Oct 2017 - Present</p>
                                </li>
                                <li>
                                    <p class="subheading">As </p>
                                    <p>a personal non-profit open-source</p>
                                </li>
                            </ul>
                        </li>
                        <li class="item-details">
                            <ul class="list">
                                <li>
                                    <a href="https://github.com/fieldofgreentea/thisisallabout_backend/" target="_blank">
                                        <p class="descriptiontitle">NEWS AGGREGATION ALGORITHM →</p>
                                    </a>
                                    <p class="description">Aggregates news stories and cleaning story data for further processing.</p>
                                </li>
                                <li>
                                    <a href="https://github.com/fieldofgreentea/thisisallabout_backend/tree/master/kevin/cluster" target="_blank">
                                        <p class="descriptiontitle">UNSUPERVISED DATA CLUSTERING ALGORITHM →</p>
                                    </a>
                                    <p class="description">HashingVectorizer-Transform structure with dimension reduction, automatic cluster size detection, and weight-based post-processing.</p>
                                </li>
                                <li>
                                    <a href="https://github.com/fieldofgreentea/thisisallabout_backend/tree/master/data_publish_ready/trumptweeted" target="_blank">
                                        <p class="descriptiontitle">CLUSTERING WORK OF PRESIDENT TRUMP'S TWEET DATA →</p>
                                    </a>
                                    <p class="description">TfIdfVectorizer with dimension reduction, automatic cluster size detection, and editorial editing via in-house data console.</p>
                                </li>
                                <li>
                                    <a href="https://github.com/fieldofgreentea/thisisallabout_frontend" target="_blank">
                                        <p class="descriptiontitle">WEBSITE, VISUALIZATION CONTENTS, AND IN-HOUSE DATA EDITING CONSOLE →</p>
                                    </a>
                                    <p class="description">Built with lit-html/es6/webpack, the console provides post-processing function for dataset files and editorial tracker.</p>
                                </li>
                                <li class="stacklist">
                                    <p>Python</p>
                                    <p>Javascript</p>
                                    <p>CSS</p>
                                    <p>MongoDB</p>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <ul id="engineering__nsr">
                        <li class="item-info">
                            <div class="productlogo" alt="#Newsrooms product logo"></div>
                            <p class="productheading">#Newsrooms</p>
                            <p class="productdescription">A customized news aggregator application that provided the most updated articles on the issues and find important trending stories of which they were unaware. </p>
                            <p class="productdescription">Furthermore, it eliminated possible systematic biases in delivering news articles and extracting the key points of the articles.</p>
                            <ul class="productworkperiod">
                                <li>
                                    <p class="subheading">Period </p>
                                    <p>Oct 2016 - Jun 2018</p>
                                </li>
                                <li>
                                    <p class="subheading">As </p>
                                    <p>a founder of Toast Labs, LLC.</p>
                                </li>
                            </ul>
                        </li>
                        <li class="item-details">
                            <ul class="list">
                                <li>
                                    <a href="https://github.com/fieldofgreentea/swoosh_backend" target="_blank">
                                        <p class="descriptiontitle">NEWS KEYWORD EXTRACTION PRE-PROCESSING →</p>
                                    </a>
                                    <p class="description">Aggregates news stories, extract keywords, and calculate tf-idf score for further processing.</p>
                                </li>
                                <li>
                                    <a href="https://github.com/fieldofgreentea/swoosh_backend" target="_blank">
                                        <p class="descriptiontitle">UNSUPERVISED NEWS BRIEFING ALGORITHM →</p>
                                    </a>
                                    <p class="description">Generates a news briefing content using n-gram token cross-comparison and keyword tokens.</p>
                                </li>
                                <li>
                                    <a href="https://github.com/fieldofgreentea/swoosh_ui" target="_blank">
                                        <p class="descriptiontitle">HYBRID MOBILE APPLICATIONS →</p>
                                    </a>
                                    <p class="description">Built a custom interface framework using Javascript and CSS without requiring heavy cross-platform libraries.</p>
                                </li>
                                <li class="stacklist">
                                    <p>Node.js</p>
                                    <p>Javascript</p>
                                    <p>CSS</p>
                                    <p>MongoDB</p>
                                    <p>Swift 3</p>
                                    <p>Java</p>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <ul id="engineering__adv">
                        <li class="item-info">
                            <div class="productlogo" alt="Poplar product logo"></div>
                            <p class="productheading">Adventure (formerly Poplar)</p>
                            <p class="productdescription">Adventure and its predecessor Poplar (the logo above) is an app that was all about bringing us closer to each other. It uses geolocation tracking and real-time notification logic specifically designed to connect between multiple nearby people without revealing actual location.</p>
                            <p class="productdescription">Ultimately, it experimented to let people spend more time with their friends by reducing time staying on screen.</p>
                            <ul class="productworkperiod">
                                <li>
                                    <p class="subheading">Period </p>
                                    <p>Apr 2015 - Aug 2016</p>
                                </li>
                                <li>
                                    <p class="subheading">As </p>
                                    <p>a founder of Toast Labs, LLC. Adventure app logo design and back-end created by/all intellectual property rights (2017-) transferred to co-founder Sam Holmes.</p>
                                </li>
                            </ul>
                        </li>
                        <li class="item-details">
                            <ul class="list">
                                <li>
                                    <p class="descriptiontitle">LOW-POWER GEOFENCING ALGORITHM</p>
                                    <p class="description">Tracks geolocation movements using dynamically-created geofences towards latest movement direction, adapting to GPS accuracy and moving speed.</p>
                                </li>
                                <li>
                                    <p class="descriptiontitle">ADVANCED CAMERA WITH DYNAMIC PHOTO/VIDEO SCRIBBLE EXPERIENCE</p>
                                    <p class="description">Interactive camera with press-and-hold capture experience, real-time color filter and scribble support that is seamlessly integrated to main interface.</p>
                                </li>
                                <li>
                                    <p class="descriptiontitle">HYBRID MOBILE APPLICATIONS</p>
                                    <p class="description">Built a custom interface framework using Javascript and CSS without requiring heavy cross-platform libraries. It works coherently with native iOS components including camera, map, dual-swipeable view controller and geofence engine calls.</p>
                                </li>
                                <li class="stacklist">
                                    <p>Javascript</p>
                                    <p>CSS</p>
                                    <p>Objective-C</p>
                                    <p>Java</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="workgrid-design">
                    <ul id="design__portfoliopdf">
                        <a href="https://toddoh.com/files/DesignPortfolio.pdf" target="_blank">
                            <li>Download Design Portfolio PDF ↓</li>
                        </a>
                    </ul>
                    <ul id="design__tiaa">
                        <li class="item-info">
                            <div class="productlogo" alt="Thisisallabout product logo"></div>
                            <p class="productheading">thisisallabout</p>
                            <p class="productdescription">The data-driven journalism project unravels complex issues and agendas by group, timeframe, and key topic using intelligent data analysis and great visualization.</p>
                            <p class="productdescription">I developed a full set of website and back-end including the algorithm that examines a wide range of media in order to create a qualified look at important issues.</p>
                            <ul class="productworkperiod">
                                <li>
                                    <p class="subheading">Period </p>
                                    <p>Oct 2017 - Present</p>
                                </li>
                                <li>
                                    <p class="subheading">As </p>
                                    <p>a personal non-profit open-source</p>
                                </li>
                            </ul>
                        </li>
                        
                        <li class="item-details">
                            <ul class="grid-1">
                                <li class="grid-image g1"></li>
                                <li class="grid-image g2"></li>
                            </ul>
                            <ul class="grid-combination">
                                <ul class="grid-2">
                                    <li class="grid-image g3"></li>
                                    <li class="grid-image g4"></li>
                                </ul>
                                <ul class="grid-3">
                                    <li class="grid-image g5"></li>
                                    <li class="grid-image g6"></li>
                                </ul>
                            </ul>
                        </li>
                    </ul>

                    <ul id="design__nsr">
                        <li class="item-info">
                            <div class="productlogo" alt="#Newsrooms product logo"></div>
                            <p class="productheading">#Newsrooms</p>
                            <p class="productdescription">A customized news aggregator application that provided the most updated articles on the issues and find important trending stories of which they were unaware. </p>
                            <p class="productdescription">Furthermore, it eliminated possible systematic biases in delivering news articles and extracting the key points of the articles.</p>
                            <ul class="productworkperiod">
                                <li>
                                    <p class="subheading">Period </p>
                                    <p>Oct 2016 - Jun 2018</p>
                                </li>
                                <li>
                                    <p class="subheading">As </p>
                                    <p>a founder of Toast Labs, LLC.</p>
                                </li>
                            </ul>
                        </li>
                        
                        <li class="item-details">
                            <ul class="grid-1">
                                <li class="grid-image g1"></li>
                                <li class="grid-image g2"></li>
                            </ul>
                            <ul class="grid-2">
                                <li class="grid-image g3"></li>
                                <li class="grid-image g4"></li>
                                <li class="grid-image g5"></li>
                            </ul>
                        </li>
                    </ul>

                    <ul id="design__adv">
                        <li class="item-info">
                            <div class="productlogo" alt="Poplar product logo"></div>
                            <p class="productheading">Adventure (formerly Poplar)</p>
                            <p class="productdescription">Adventure and its predecessor Poplar (the logo above) is an app that was all about bringing us closer to each other. It uses geolocation tracking and real-time notification logic specifically designed to connect between multiple nearby people without revealing actual location.</p>
                            <p class="productdescription">Ultimately, it experimented to let people spend more time with their friends by reducing time staying on screen.</p>
                            <ul class="productworkperiod">
                                <li>
                                    <p class="subheading">Period </p>
                                    <p>Apr 2015 - Aug 2016</p>
                                </li>
                                <li>
                                    <p class="subheading">As </p>
                                    <p>a founder of Toast Labs, LLC. Adventure app logo design and back-end created by/all intellectual property rights (2017-) transferred to co-founder Sam Holmes.</p>
                                </li>
                            </ul>
                        </li>
                        
                        <li class="item-details">
                            <ul class="grid-1">
                                <ul class="grid-combination">
                                    <p class="subheading">Adventure</p>
                                    <li class="grid-image g1"></li>
                                </ul>
                                <li class="grid-image g2"></li>
                                <li class="grid-image g3"></li>
                                <li class="grid-image g4"></li>
                            </ul>
                            <ul class="grid-2">
                                <li class="grid-image g5"></li>
                                <ul class="grid-combination">
                                    <li class="grid-image g6"></li>
                                    <p class="subheading">Poplar</p>
                                </ul>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

        <div class="latte-dataload"></div>
        <div class="latte-bidobido"</div>
    </div>`,window.screen.width<=980?document.body.setAttribute("banana-type","mobile"):document.body.setAttribute("banana-type","");const t=document.querySelectorAll(".latte-menu .menu-action"),i=document.querySelector(".latte-menu"),a=document.querySelector(".latte-header .static-header");t.forEach(e=>{e.addEventListener("click",()=>{"y"==i.getAttribute("status")?(i.setAttribute("status","n"),a.setAttribute("status","n")):(i.setAttribute("status","y"),a.setAttribute("status","y"))})}),a.addEventListener("click",()=>{"y"==i.getAttribute("status")?(i.setAttribute("status","n"),a.setAttribute("status","n")):(i.setAttribute("status","y"),a.setAttribute("status","y"))}),window.addEventListener("scroll",e=>{const t=document.querySelector(".latte-header");window.scrollY>=70?t.setAttribute("status","not_viewport"):t.setAttribute("status","")});const l=document.querySelector(".workgrid-action-jumpnext"),o=document.querySelector(".latte-workgrid"),n=document.querySelector(".workgrid-header"),r=()=>{window.scrollTo(0,0),o.setAttribute("status","design");let e="grid-template-columns: 0vw "+(.89*Math.max(document.documentElement.clientWidth)-70)+"px 370px";n.setAttribute("style",e);let t="transform: translate3d(-"+(.89*Math.max(document.documentElement.clientWidth)-70-50)+"px, 0, 0)";l.setAttribute("style",t),history.replaceState(void 0,void 0,"#work?type=design")},d=()=>{window.scrollTo(0,0),o.setAttribute("status",""),n.setAttribute("style",""),l.setAttribute("style",""),history.replaceState(void 0,void 0,"#work")};"design"==e?r():d(),l.addEventListener("click",()=>{"design"==o.getAttribute("status")?d():r()}),window.addEventListener("resize",()=>{if("design"==window.location.href.split("?type=")[1]){o.setAttribute("status","design");let e="grid-template-columns: 0vw "+(.89*Math.max(document.documentElement.clientWidth)-70)+"px 370px";n.setAttribute("style",e);let t="transform: translate3d(-"+(.89*Math.max(document.documentElement.clientWidth)-70-50)+"px, 0, 0)";l.setAttribute("style",t)}})}}}]);