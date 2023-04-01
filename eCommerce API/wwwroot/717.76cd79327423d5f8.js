"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[717],{3717:(Y,b,s)=>{s.r(b),s.d(b,{ShopModule:()=>l});var f=s(8869);class y{constructor(){this.brandId=0,this.typeId=0,this.sort="name",this.pageNumber=1,this.pageSize=6,this.search=""}}var t=s(1571),Z=s(2340),x=s(529),v=s(9646),P=s(4004);class A{constructor(){this.data=[]}}class p{constructor(o){this.http=o,this.baseUrl=Z.N.apiUrl,this.products=[],this.brands=[],this.types=[],this.pagination=new A,this.shopParams=new y,this.productCache=new Map}setShopParams(o){this.shopParams=o}getShopParams(){return this.shopParams}getProducts(o){if(!1===o&&(this.productCache=new Map),this.productCache.size>0&&!0===o&&this.productCache.has(Object.values(this.shopParams).join("-")))return this.pagination.data=this.productCache.get(Object.values(this.shopParams).join("-")),(0,v.of)(this.pagination);let e=new x.LE;return 0!==this.shopParams.brandId&&(e=e.append("brandId",this.shopParams.brandId.toString())),0!==this.shopParams.typeId&&(e=e.append("typeId",this.shopParams.typeId.toString())),this.shopParams.search&&(e=e.append("search",this.shopParams.search)),e=e.append("sort",this.shopParams.sort),e=e.append("pageIndex",this.shopParams.pageNumber.toString()),e=e.append("pageSize",this.shopParams.pageSize.toString()),this.http.get(this.baseUrl+"products",{observe:"response",params:e}).pipe((0,P.U)(i=>(this.productCache.set(Object.values(this.shopParams).join("-"),i.body.data),this.pagination=i.body,this.pagination)))}getProduct(o){let e;return this.productCache.forEach(i=>{e=i.find(a=>a.id===o)}),e?(0,v.of)(e):this.http.get(this.baseUrl+"products/"+o)}getBrands(){return this.brands.length>0?(0,v.of)(this.brands):this.http.get(this.baseUrl+"products/brands").pipe((0,P.U)(o=>(this.brands=o,o)))}getTypes(){return this.types.length>0?(0,v.of)(this.types):this.http.get(this.baseUrl+"products/types").pipe((0,P.U)(o=>(this.types=o,o)))}}p.\u0275fac=function(o){return new(o||p)(t.LFG(x.eN))},p.\u0275prov=t.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"});var r=s(6895);function N(n,o){if(1&n&&(t.TgZ(0,"span"),t._uU(1," Showing "),t.TgZ(2,"strong"),t._uU(3),t.qZA(),t._uU(4," of "),t.TgZ(5,"strong"),t._uU(6),t.qZA(),t._uU(7," results "),t.qZA()),2&n){const e=t.oxw();t.xp6(3),t.AsE(" ",(e.pageNumber-1)*e.pageSize+1," - ",e.pageNumber*e.pageSize>e.totalCount?e.totalCount:e.pageNumber*e.pageSize," "),t.xp6(3),t.Oqu(e.totalCount)}}function O(n,o){1&n&&(t.TgZ(0,"span"),t._uU(1," There are no results for your filter "),t.qZA())}class h{constructor(){this.pageNumber=0,this.pageSize=0,this.totalCount=0}}h.\u0275fac=function(o){return new(o||h)},h.\u0275cmp=t.Xpm({type:h,selectors:[["app-paging-header"]],inputs:{pageNumber:"pageNumber",pageSize:"pageSize",totalCount:"totalCount"},decls:3,vars:2,consts:[[4,"ngIf"]],template:function(o,e){1&o&&(t.TgZ(0,"header"),t.YNc(1,N,8,3,"span",0),t.YNc(2,O,2,0,"span",0),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngIf",e.totalCount&&e.totalCount>0),t.xp6(1),t.Q6J("ngIf",0==e.totalCount))},dependencies:[r.O5]});var w=s(6939),C=s(433);function M(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"pagination",1),t.NdJ("pageChanged",function(a){t.CHM(e);const c=t.oxw();return t.KtG(c.onPagerChange(a))}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("ngModel",e.pageNumber)("itemsPerPage",e.pageSize)("boundaryLinks",!0)("totalItems",e.totalCount)}}class g{constructor(){this.totalCount=0,this.pageSize=0,this.pageChanged=new t.vpe}onPagerChange(o){this.pageChanged.emit(o.page)}}g.\u0275fac=function(o){return new(o||g)},g.\u0275cmp=t.Xpm({type:g,selectors:[["app-pager"]],inputs:{totalCount:"totalCount",pageSize:"pageSize",pageNumber:"pageNumber"},outputs:{pageChanged:"pageChanged"},decls:1,vars:1,consts:[["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",3,"ngModel","itemsPerPage","boundaryLinks","totalItems","pageChanged",4,"ngIf"],["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",3,"ngModel","itemsPerPage","boundaryLinks","totalItems","pageChanged"]],template:function(o,e){1&o&&t.YNc(0,M,1,4,"pagination",0),2&o&&t.Q6J("ngIf",e.totalCount&&e.totalCount>0)},dependencies:[r.O5,w.Qt,C.JJ,C.On]});var T=s(122);class d{constructor(o){this.basketService=o,this.product={}}addItemToBasket(){this.basketService.addItemToBasket(this.product)}}d.\u0275fac=function(o){return new(o||d)(t.Y36(T.v))},d.\u0275cmp=t.Xpm({type:d,selectors:[["app-product-item"]],inputs:{product:"product"},decls:14,vars:7,consts:[[1,"card","shadow-sm"],[1,"image","position-relative",2,"cursor","pointer"],["alt","product.name",1,"img-fluid","bg-light",3,"src"],[1,"d-flex","align-items-center","justify-content-center","hover-overlay"],["type","button",1,"btn","btn-primary","fa","fa-shopping-cart","mr-2",3,"click"],["type","button",1,"btn","btn-primary",3,"routerLink"],[1,"card-body"],[3,"routerLink"],[1,"card-title"],[1,"mb-2"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"div",3)(4,"button",4),t.NdJ("click",function(){return e.addItemToBasket()}),t.qZA(),t.TgZ(5,"button",5),t._uU(6," View "),t.qZA()()(),t.TgZ(7,"div",6)(8,"a",7)(9,"h6",8),t._uU(10),t.qZA()(),t.TgZ(11,"span",9),t._uU(12),t.ALo(13,"currency"),t.qZA()()()),2&o&&(t.xp6(2),t.s9C("src",e.product.pictureUrl,t.LSH),t.xp6(3),t.MGl("routerLink","/shop/",e.product.id,""),t.xp6(3),t.MGl("routerLink","/shop/",e.product.id,""),t.xp6(2),t.Oqu(e.product.name),t.xp6(2),t.Oqu(t.lcZ(13,5,e.product.price)))},dependencies:[f.rH,r.H9],styles:[".btn[_ngcontent-%COMP%]{width:30%;height:40px;margin:10px}.image[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{opacity:1}.button[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{transform:none;opacity:.5}.hover-overlay[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;background-color:#ffffff80;opacity:0;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{z-index:1000;transition:all .5s}.hover-overlay[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:first-of-type{transform:translate(-20px)}.hover-overlay[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:last-of-type{transform:translate(20px)}img[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;object-fit:contain;height:300px}.card[_ngcontent-%COMP%]{height:400px}"]});const k=["search"];function I(n,o){if(1&n&&(t.TgZ(0,"option",18),t._uU(1),t.qZA()),2&n){const e=o.$implicit,i=t.oxw(2);t.Q6J("value",e.value)("selected",i.shopParams.sort===e.value),t.xp6(1),t.hij(" ",e.name," ")}}function U(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"li",19),t.NdJ("click",function(){const c=t.CHM(e).$implicit,S=t.oxw(2);return t.KtG(S.onBrandSelected(c.id))}),t._uU(1),t.qZA()}if(2&n){const e=o.$implicit,i=t.oxw(2);t.ekj("active",e.id===i.shopParams.brandId),t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function q(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"li",19),t.NdJ("click",function(){const c=t.CHM(e).$implicit,S=t.oxw(2);return t.KtG(S.onTypeSelected(c.id))}),t._uU(1),t.qZA()}if(2&n){const e=o.$implicit,i=t.oxw(2);t.ekj("active",e.id===i.shopParams.typeId),t.Q6J("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function J(n,o){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"h5",12),t._uU(2,"Sort"),t.qZA(),t.TgZ(3,"select",13),t.NdJ("change",function(a){t.CHM(e);const c=t.oxw();return t.KtG(c.onSortSelected(a.target.value))}),t.YNc(4,I,2,3,"option",14),t.qZA(),t.TgZ(5,"h5",15),t._uU(6,"Brands"),t.qZA(),t.TgZ(7,"ul",16),t.YNc(8,U,2,4,"li",17),t.qZA(),t.TgZ(9,"h5",15),t._uU(10,"Types"),t.qZA(),t.TgZ(11,"ul",16),t.YNc(12,q,2,4,"li",17),t.qZA(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(4),t.Q6J("ngForOf",e.sortOptions),t.xp6(4),t.Q6J("ngForOf",e.brands),t.xp6(4),t.Q6J("ngForOf",e.types)}}function z(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",20)(1,"input",21,22),t.NdJ("keyup.enter",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.onSearch())}),t.qZA(),t.TgZ(3,"button",23),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.onSearch())}),t._uU(4," Search "),t.qZA(),t.TgZ(5,"button",24),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.onReset())}),t._uU(6," Reset "),t.qZA()()}}function F(n,o){if(1&n&&(t.TgZ(0,"div",25),t._UZ(1,"app-product-item",26),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Q6J("product",e)}}class m{constructor(o){this.shopService=o,this.sortOptions=[{name:"Alphabetical",value:"name"},{name:"Price: Low to High",value:"priceAsc"},{name:"Price: High to Low",value:"priceDesc"}],this.shopParams=this.shopService.getShopParams()}ngOnInit(){this.getProducts(!0),this.getBrands(),this.getTypes()}getProducts(o=!1){this.shopService.getProducts(o).subscribe(e=>{this.products=e.data,this.totalCount=e.count},e=>{console.log(e)})}getBrands(){this.shopService.getBrands().subscribe(o=>{this.brands=[{id:0,name:"All"},...o]},o=>{console.log(o)})}getTypes(){this.shopService.getTypes().subscribe(o=>{this.types=[{id:0,name:"All"},...o]},o=>{console.log(o)})}onBrandSelected(o){const e=this.shopService.getShopParams();e.brandId=o,e.pageNumber=1,this.shopService.setShopParams(e),this.getProducts()}onTypeSelected(o){const e=this.shopService.getShopParams();e.typeId=o,e.pageNumber=1,this.shopService.setShopParams(e),this.getProducts()}onSortSelected(o){const e=this.shopService.getShopParams();e.sort=o,this.shopService.setShopParams(e),this.getProducts()}onPageChanged(o){const e=this.shopService.getShopParams();e.pageNumber!==o&&(e.pageNumber=o,this.shopService.setShopParams(e),this.getProducts(!0))}onSearch(){const o=this.shopService.getShopParams();o.search=this.searchTerm.nativeElement.value,o.pageNumber=1,this.shopService.setShopParams(o),this.getProducts()}onReset(){this.searchTerm.nativeElement.value="",this.shopParams=new y,this.shopService.setShopParams(this.shopParams),this.getProducts()}}m.\u0275fac=function(o){return new(o||m)(t.Y36(p))},m.\u0275cmp=t.Xpm({type:m,selectors:[["app-shop"]],viewQuery:function(o,e){if(1&o&&t.Gf(k,5),2&o){let i;t.iGM(i=t.CRH())&&(e.searchTerm=i.first)}},decls:12,vars:9,consts:[[1,"cointainer","mt-3"],[1,"row"],[1,"col-3"],[4,"ngIf"],[1,"col-9"],[1,"d-flex","justify-content-between","align-item-center","pb-2"],[3,"totalCount","pageSize","pageNumber"],["class","form-inline mt-2",4,"ngIf"],[1,"row","row-cols-1","row-cols-sm-2","row-cols-md-3","g-3"],["class","col-4",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","mt-2"],[3,"pageSize","totalCount","pageNumber","pageChanged"],[1,"text","ml-3","mt-5"],[1,"custom-select","mb-3",3,"change"],[3,"value","selected",4,"ngFor","ngForOf"],[1,"text","ml-3"],[1,"list-group","my-3"],["class","list-group-item",3,"active","value","click",4,"ngFor","ngForOf"],[3,"value","selected"],[1,"list-group-item",3,"value","click"],[1,"form-inline","mt-2"],["placeholder","Search","type","text",1,"form-control",2,"width","300px",3,"keyup.enter"],["search",""],[1,"btn","btn-outline-primary","m3-2","my-2",3,"click"],[1,"btn","btn-outline-success","ml-2","my-2",3,"click"],[1,"col-4"],[3,"product"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"section",2),t.YNc(3,J,13,3,"ng-container",3),t.qZA(),t.TgZ(4,"section",4)(5,"div",5),t._UZ(6,"app-paging-header",6),t.YNc(7,z,7,0,"div",7),t.qZA(),t.TgZ(8,"div",8),t.YNc(9,F,2,1,"div",9),t.qZA(),t.TgZ(10,"div",10)(11,"app-pager",11),t.NdJ("pageChanged",function(a){return e.onPageChanged(a)}),t.qZA()()()()()),2&o&&(t.xp6(3),t.Q6J("ngIf",e.types&&e.brands),t.xp6(3),t.Q6J("totalCount",e.totalCount)("pageSize",e.shopParams.pageSize)("pageNumber",e.shopParams.pageNumber),t.xp6(1),t.Q6J("ngIf",e.products),t.xp6(2),t.Q6J("ngForOf",e.products),t.xp6(2),t.Q6J("pageSize",e.shopParams.pageSize)("totalCount",e.totalCount)("pageNumber",e.shopParams.pageNumber))},dependencies:[r.sg,r.O5,h,g,C.YN,C.Kr,d],styles:[".custom-select[_ngcontent-%COMP%]{width:100%;height:30px}.list-group-item[_ngcontent-%COMP%]{cursor:pointer;border:none;padding:10px 20px;font-size:1.1em}.list-group-item[_ngcontent-%COMP%]:focus{outline:none}.list-group-item[_ngcontent-%COMP%]:active{border:radius 10px}.list-group-item[_ngcontent-%COMP%]:not(.active):hover{color:#fff;background-color:#353535c0;border-radius:10px;transition:.5s}"]});var Q=s(8909);function B(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",2)(1,"div",3),t._UZ(2,"img",4),t.qZA(),t.TgZ(3,"div",3)(4,"h3"),t._uU(5),t.qZA(),t.TgZ(6,"p",5),t._uU(7),t.ALo(8,"currency"),t.qZA(),t.TgZ(9,"div",6)(10,"i",7),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.decrementQuantity())}),t.qZA(),t.TgZ(11,"span",8),t._uU(12),t.qZA(),t.TgZ(13,"i",9),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.incrementQuantity())}),t.qZA(),t.TgZ(14,"button",10),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.addItemToBasket())}),t._uU(15," Add to cart "),t.qZA()(),t.TgZ(16,"div",11)(17,"div",12)(18,"h4"),t._uU(19,"Product description"),t.qZA(),t.TgZ(20,"p"),t._uU(21),t.qZA()()()()()}if(2&n){const e=t.oxw();t.xp6(2),t.s9C("src",e.product.pictureUrl,t.LSH),t.s9C("alt",e.product.name),t.xp6(3),t.Oqu(e.product.name),t.xp6(2),t.Oqu(t.lcZ(8,6,e.product.price)),t.xp6(5),t.Oqu(e.quantity),t.xp6(9),t.Oqu(e.product.description)}}class _{constructor(o,e,i,a){this.shopService=o,this.activatedRoute=e,this.bcService=i,this.basketService=a,this.quantity=1,this.bcService.set("@productDetails","")}ngOnInit(){this.loadProduct()}addItemToBasket(){this.basketService.addItemToBasket(this.product,this.quantity)}incrementQuantity(){this.quantity++}decrementQuantity(){this.quantity>1&&this.quantity--}loadProduct(){console.log(+this.activatedRoute.snapshot.paramMap.get("id")),this.shopService.getProduct(+this.activatedRoute.snapshot.paramMap.get("id")).subscribe(o=>{this.product=o,console.log(this.product),this.bcService.set("@productDetails",o.name)},o=>{console.log(o)})}}_.\u0275fac=function(o){return new(o||_)(t.Y36(p),t.Y36(f.gz),t.Y36(Q.pm),t.Y36(T.v))},_.\u0275cmp=t.Xpm({type:_,selectors:[["app-product-details"]],decls:2,vars:1,consts:[[1,"container","mt-5"],["class","row",4,"ngIf"],[1,"row"],[1,"col-6"],[1,"img-fluid","w-100",3,"src","alt"],[2,"font-size","2em"],[1,"d-flex","justify-content-start","align-items-center"],[1,"fa","fa-minus-circle","text-warning","mr-2",2,"cursor","pointer","font-size","2em",3,"click"],[1,"font-weight-bold",2,"font-size","1.5em","margin","4px"],[1,"fa","fa-plus-circle","text-warning","mr-2",2,"cursor","pointer","font-size","2em","margin-right","30px",3,"click"],[1,"btn","btn-outline-primary","btn-lg","ml-4",3,"click"],[1,"row","mt-5"],[1,"col-12","ml-3"]],template:function(o,e){1&o&&(t.TgZ(0,"div",0),t.YNc(1,B,22,8,"div",1),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngIf",e.product))},dependencies:[r.O5,r.H9]});const H=[{path:"",component:m},{path:":id",component:_,data:{breadcrumb:{alias:"productDetails"}}}];class u{}u.\u0275fac=function(o){return new(o||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[f.Bz.forChild(H),f.Bz]});var j=s(3719);class l{}l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[r.ez,j.m,u]})}}]);