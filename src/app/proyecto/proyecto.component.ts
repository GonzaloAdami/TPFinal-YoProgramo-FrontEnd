import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {
  nuevoDataSlideTo: string = "";
  nuevoAriaLabel: string = "";
  constructor (){
    this.nuevoDataSlideTo = "2"
    this.nuevoAriaLabel = "3"
  }
  crearProyecto(){  
    let listaAdd = document.getElementById("agregarLista");
    let proyectAdd = document.getElementById("agregarProyecto");
    let itemList = document.createElement("button");
    itemList.setAttribute("type", "button");
    
    var dataSlideTo = itemList.getAttribute("data-bs-slide-to");
    var ariaLabel = itemList.getAttribute("aria-label");
    this.nuevoDataSlideTo = (parseInt(this.nuevoDataSlideTo) + 1).toString();
    this.nuevoAriaLabel = (parseInt(this.nuevoAriaLabel) + 1).toString();

    
    itemList.setAttribute("data-bs-target", "#carouselExampleIndicators");
    itemList.setAttribute("data-bs-slide-to", this.nuevoDataSlideTo.toString());
    itemList.setAttribute("aria-label", this.nuevoAriaLabel.toString());
    
    dataSlideTo = itemList.getAttribute("data-bs-slide-to");
    ariaLabel = itemList.getAttribute("aria-label");
    
    console.log("data-bs-slide-to:", dataSlideTo);
    console.log("aria-label:", ariaLabel);
  let carouselItem = document.createElement("div");
  carouselItem.classList.add("carousel-item");
  let center = document.createElement("div");
  center.classList.add("d-flex", "justify-content-center");
  let card = document.createElement("div");
  card.style.backgroundClip = "border-box";
  card.style.backgroundColor = "rgb(255, 255, 255)";
  card.style.borderBottomColor = "rgba(0, 0, 0, 0.176)";
  card.style.borderBottomLeftRadius = "15px";
  card.style.borderBottomRightRadius = "15px";
  card.style.borderBottomStyle = "solid";
  card.style.borderBottomWidth = "0.666667px";
  card.style.borderImageOutset = "0";
  card.style.borderImageRepeat = "stretch";
  card.style.borderImageSlice = "100%";
  card.style.borderImageSource = "none";
  card.style.borderImageWidth = "1";
  card.style.borderLeftColor = "rgba(0, 0, 0, 0.176)";
  card.style.borderLeftStyle = "solid";
  card.style.borderLeftWidth = "0.666667px";
  card.style.borderRightColor = "rgba(0, 0, 0, 0.176)";
  card.style.borderRightStyle = "solid";
  card.style.borderRightWidth = "0.666667px";
  card.style.borderTopColor = "rgba(0, 0, 0, 0.176)";
  card.style.borderTopLeftRadius = "15px";
  card.style.borderTopRightRadius = "15px";
  card.style.borderTopStyle = "solid";
  card.style.borderTopWidth = "0.666667px";
  card.style.boxShadow = "rgba(0, 0, 0, 0.5) 0px 0px 12px 0px";
  card.style.boxSizing = "border-box";
  card.style.color = "rgb(33, 37, 41)";
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.fontFamily = "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', 'Liberation Sans', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'";
  card.style.fontSize = "16px";
  card.style.fontWeight = "400";
  card.style.height = "467.333px";
  card.style.lineHeight = "24px";
  card.style.minWidth = "0px";
  card.style.position = "relative";
  card.style.textAlign = "start";
  card.style.width = "352px";

  card.style.width = "22rem";
  card.style.borderRadius = "15px";
  card.style.boxShadow = "0px 0px 12px 0px rgba(0, 0, 0, 0.5)";
  card.style.margin = "5rem";
card.setAttribute("data-bs-toggle", "modal");
card.setAttribute("data-bs-target", "#card-modal");
  let img = document.createElement("img");
  img.src = "../../assets/img/proyect-new.png";
  img.style.borderBottomLeftRadius = "15px";
  img.style.borderBottomRightRadius = "15px";
  img.style.borderTopLeftRadius = "15px";
  img.style.borderTopRightRadius = "15px";
  img.style.boxSizing = "border-box";
  img.style.color = "rgb(33, 37, 41)";
  img.style.display = "block";
  img.style.fontFamily = "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', 'Liberation Sans', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'";
  img.style.fontSize = "16px";
  img.style.fontWeight = "400";
  img.style.height = "350.667px";
  img.style.lineHeight = "24px";
  img.style.overflowClipMargin = "content-box";
  img.style.overflowWrap = "break-word";
  img.style.overflowX = "clip";
  img.style.overflowY = "clip";
  img.style.textAlign = "start";
  img.style.verticalAlign = "middle";
  img.style.width = "350.667px";

img.id = "edit-card-img";
img.classList.add("card-img-top");
img.alt = "Slide 2";
  let cardBody = document.createElement("div");
  cardBody.style.boxSizing = "border-box";
cardBody.style.color = "rgb(33, 37, 41)";
cardBody.style.display = "block";
cardBody.style.flexBasis = "auto";
cardBody.style.flexGrow = "1";
cardBody.style.flexShrink = "1";
cardBody.style.fontFamily = "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', 'Liberation Sans', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'";
cardBody.style.fontSize = "16px";
cardBody.style.fontWeight = "400";
cardBody.style.height = "115.333px";
cardBody.style.lineHeight = "24px";
cardBody.style.overflowWrap = "break-word";
cardBody.style.paddingBottom = "16px";
cardBody.style.paddingLeft = "16px";
cardBody.style.paddingRight = "16px";
cardBody.style.paddingTop = "16px";
cardBody.style.textAlign = "start";

cardBody.style.width = "350.667px";

  cardBody.classList.add("card-body");
  let textCard = document.createElement("p");
  textCard.classList.add("card-text");
textCard.textContent = "¡Sube ya tu nuevo proyecto!";
  let link = document.createElement("button");
  link.style.alignItems = "flex-start";
link.style.appearance = "button";
link.style.backgroundColor = "rgb(18, 116, 187)";
link.style.borderBottomColor = "rgb(18, 116, 187)";
link.style.borderBottomLeftRadius = "30px";
link.style.borderBottomRightRadius = "30px";
link.style.borderBottomStyle = "solid";
link.style.borderBottomWidth = "0.666667px";
link.style.borderImageOutset = "0";
link.style.borderImageRepeat = "stretch";
link.style.borderImageSlice = "100%";
link.style.borderImageSource = "none";
link.style.borderImageWidth = "1";
link.style.borderLeftColor = "rgb(18, 116, 187)";
link.style.borderLeftStyle = "solid";
link.style.borderLeftWidth = "0.666667px";
link.style.borderRightColor = "rgb(18, 116, 187)";
link.style.borderRightStyle = "solid";
link.style.borderRightWidth = "0.666667px";
link.style.borderTopColor = "rgb(18, 116, 187)";
link.style.borderTopLeftRadius = "30px";
link.style.borderTopRightRadius = "30px";
link.style.borderTopStyle = "solid";
link.style.borderTopWidth = "0.666667px";
link.style.boxShadow = "rgba(0, 0, 0, 0.1) 2px 12px 12px 2px";
link.style.boxSizing = "border-box";
link.style.color = "rgb(255, 255, 255)";
link.style.cursor = "pointer";
link.style.display = "inline-block";
link.style.fontFamily = "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', 'Liberation Sans', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'";
link.style.fontFeatureSettings = "normal";
link.style.fontKerning = "auto";
link.style.fontOpticalSizing = "auto";
link.style.fontSize = "12px";
link.style.fontStretch = "100%";
link.style.fontStyle = "normal";
link.style.fontVariantAlternates = "normal";
link.style.fontVariantCaps = "normal";
link.style.fontVariantEastAsian = "normal";
link.style.fontVariantLigatures = "normal";
link.style.fontVariantNumeric = "normal";
link.style.fontVariationSettings = "normal";
link.style.fontWeight = "700";
link.style.height = "43.3333px";
link.style.letterSpacing = "1px";
link.style.lineHeight = "18px";
link.style.marginBottom = "0px";
link.style.marginLeft = "0px";
link.style.marginRight = "0px";
link.style.marginTop = "0px";
link.style.paddingBottom = "12px";
link.style.paddingLeft = "45px";
link.style.paddingRight = "45px";
link.style.paddingTop = "12px";
link.style.textAlign = "center";
link.style.textIndent = "0px";
link.style.textRendering = "auto";
link.style.textShadow = "none";
link.style.textTransform = "uppercase";
link.style.transitionDelay = "0s";
link.style.transitionDuration = "0.08s";
link.style.transitionProperty = "transform";
link.style.transitionTimingFunction = "ease-in";
link.style.width = "210.333px";
link.style.wordSpacing = "0px";
  link.textContent = "Ver el proyecto";
  link.setAttribute("type", "button");

  listaAdd?.appendChild(itemList);
  proyectAdd?.appendChild(carouselItem);
  carouselItem?.appendChild(center);
  center?.appendChild(card);
  card?.appendChild(img);
  card?.appendChild(cardBody);
  cardBody?.appendChild(textCard);
  cardBody?.appendChild(link);
console.log("creado")
}
}
