const eventsList = [
    { event: "click", description: "Déclenché lorsqu'un élément est cliqué." },
    { event: "dblclick", description: "Déclenché lorsqu'un élément est double-cliqué." },
    { event: "mousedown", description: "Déclenché lorsqu'un bouton de la souris est enfoncé." },
    { event: "mouseup", description: "Déclenché lorsqu'un bouton de la souris est relâché." },
    { event: "mouseover", description: "Déclenché lorsqu'un pointeur passe sur un élément." },
    { event: "mouseout", description: "Déclenché lorsqu'un pointeur quitte un élément." },
    { event: "mousemove", description: "Déclenché lorsqu'un pointeur se déplace sur un élément." },
    { event: "wheel", description: "Déclenché lors du défilement avec la molette de la souris." },
    { event: "contextmenu", description: "Déclenché lorsqu'un menu contextuel est ouvert (clic droit)." },
    { event: "keydown", description: "Déclenché lorsqu'une touche du clavier est enfoncée." },
    { event: "keyup", description: "Déclenché lorsqu'une touche du clavier est relâchée." },
    { event: "input", description: "Déclenché lorsqu'une entrée dans un champ change." },
    { event: "change", description: "Déclenché lorsqu'un champ de formulaire change." },
    { event: "focus", description: "Déclenché lorsqu'un élément reçoit le focus." },
    { event: "blur", description: "Déclenché lorsqu'un élément perd le focus." },
    { event: "submit", description: "Déclenché lorsqu'un formulaire est soumis." },
    { event: "reset", description: "Déclenché lorsqu'un formulaire est réinitialisé." },
    { event: "drag", description: "Déclenché lorsqu'un élément est en cours de glissement." },
    { event: "dragstart", description: "Déclenché au début du glissement d'un élément." },
    { event: "dragend", description: "Déclenché à la fin du glissement d'un élément." },
    { event: "dragover", description: "Déclenché lorsqu'un élément glissé est au-dessus d'une cible." },
    { event: "dragenter", description: "Déclenché lorsqu'un élément glissé entre dans une cible." },
    { event: "dragleave", description: "Déclenché lorsqu'un élément glissé quitte une cible." },
    { event: "drop", description: "Déclenché lorsqu'un élément est déposé dans une cible." },
    { event: "touchstart", description: "Déclenché lorsqu'un écran tactile est touché." },
    { event: "touchmove", description: "Déclenché lorsqu'un mouvement est détecté sur un écran tactile." },
    { event: "touchend", description: "Déclenché lorsqu'un toucher prend fin sur un écran tactile." },
    { event: "touchcancel", description: "Déclenché lorsqu'un toucher est annulé." },
    { event: "scroll", description: "Déclenché lorsqu'une page ou un élément défile." },
    { event: "resize", description: "Déclenché lorsqu'une fenêtre est redimensionnée." },
    { event: "load", description: "Déclenché lorsque la page est entièrement chargée." },
    { event: "unload", description: "Déclenché lorsqu'une page est quittée." },
    { event: "beforeunload", description: "Déclenché juste avant qu'une page soit quittée." },
    { event: "hashchange", description: "Déclenché lorsqu'une URL de hachage change." },
    { event: "animationstart", description: "Déclenché lorsqu'une animation CSS commence." },
    { event: "animationend", description: "Déclenché lorsqu'une animation CSS se termine." },
    { event: "animationiteration", description: "Déclenché à chaque itération d'une animation CSS." },
    { event: "transitionstart", description: "Déclenché lorsqu'une transition CSS commence." },
    { event: "transitionend", description: "Déclenché lorsqu'une transition CSS se termine." },
    { event: "transitionrun", description: "Déclenché lorsqu'une transition CSS démarre." }
];

console.log("Liste des événements utilisables avec addEventListener:", eventsList);
