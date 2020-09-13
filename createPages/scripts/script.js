class Element {
    constructor(element, cls, id) {
        this.element = element;
        this.cls = cls;
        this.id = id;
    }
    addElement() {
        let element = document.createElement(this.element);
        element.className = this.cls;
        element.id = this.id;

        root.append(element);
        console.log(`${this.element} created`);
    }
};

const createHeader = () => {
    class Header extends Element {};
    const header = new Header("header", "mainHeader", "mainHeaderId");
    header.addElement();
    mainHeaderId.insertAdjacentHTML('beforeend',
        `this is header
    	`
    );
}
const createNav = () => {
    class Nav extends Element {};
    const nav = new Nav("nav", "topNavPanel", "mainNavId");
    nav.addElement();
    mainNavId.insertAdjacentHTML('beforeend',
        `<div class= "menuitems container full">
        <ul class = "navListComponent">
			<li class = "menuItem menuItemHome">
				<a href="#">Home</a>
			</li>
			<li class = "menuItem menuItemReviews">
				<a href="#">Reviews</a>
            </li>
            <li class = "menuItem menuItemForum">
                <a href="#">Forum</a>
            </li>
            <li class = "menuItem menuItemAbout">
                <a href="#">About</a>
            </li>
         </ul>
    	`
    );
}
const createMainContent = () =>{
	class Main extends Element {};
    const main = new Main("main", "mainMain", "mainMainId");
    main.addElement();
    mainMainId.insertAdjacentHTML('beforeend',
        `this is main
    	`
    );
}
const createLeftSide = () =>{
	class LeftSide extends Element {};
    const leftSide = new LeftSide("div", "leftSide", "leftSideId");
    leftSide.addElement();
    leftSideId.insertAdjacentHTML('beforeend',
        `this is left side panel
    	`
    );
}
const createAdsSide = () =>{
	class Ads extends Element {};
    const ads = new Ads("div", "ads", "adsId");
    ads.addElement();
    adsId.insertAdjacentHTML('beforeend',
        `this is ads side panel
    	`
    );
}
const createFooter = () =>{
	class Footer extends Element {};
    const footer = new Footer("footer", "mainFooter", "footerId");
    footer.addElement();
    footerId.insertAdjacentHTML('beforeend',
        `this is footer
    	`
    );
}
createHeader();
createNav();
createMainContent();
createLeftSide();
createAdsSide();
createFooter();