class Gallery {
    constructor(args) {
        this.root = document.querySelector(args.id);
        this.pictures = this.root.querySelectorAll('a');
        this.tempateID = 'pictureBoxTemplate';
        this.popUpIDs = {
            root: args.popUp.rootID,
            picture: args.popUp.pictureID,
            closeButton: args.popUp.closeButtonID,
            prevButton: args.popUp.prevButtonID,
            nextButton: args.popUp.nextButtonID,
            counter: args.popUp.counterID
        }
    }

    init() {
        this.pictures.forEach((item, index) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                this.imageToShow = item.getAttribute('href')
                this.openPopUp(index)
            })
        });
    }

    openPopUp(index) {
        this.currentIndex = index
        const template = document.getElementById(this.tempateID).content.cloneNode(true);

        document.body.appendChild(template);
        this.popUp= {};
        this.popUp.root = document.getElementById('popUp');
        this.popUp.picture = document.getElementById(this.popUpIDs.picture);
        this.popUp.closeBtn = document.getElementById(this.popUpIDs.closeButton);
        this.popUp.prevBtn = document.getElementById(this.popUpIDs.prevButton);
        this.popUp.nextBtn = document.getElementById(this.popUpIDs.nextButton);

        this.popUp.closeBtn.addEventListener('click', () => {
            this.closePopUp();
        })

        this.popUp.prevBtn.addEventListener('click', () => {
            this.currentIndex = this.getNewIndex('prev');
            this.switchPicture(this.currentIndex);
        })
        this.popUp.nextBtn.addEventListener('click', () => {
            this.currentIndex = this.getNewIndex('next');
            this.switchPicture(this.currentIndex);
        })

        this.switchPicture(this.currentIndex);
    }

    closePopUp() {
        this.popUp.root.remove();
        delete this.popUp;
        delete this.currentIndex;
    }

    getNewIndex(direction) {
        let newIndex;
        if(direction === 'prev') {
            if(this.currentIndex === 0) {
                newIndex = this.pictures.length - 1;
            } else {
                newIndex = this.currentIndex - 1;
            }
        } else if(direction === 'next') {
            if(this.currentIndex === this.pictures.length - 1) {
                newIndex = 0;
            } else {
                newIndex = this.currentIndex + 1;
            } 
        }
        return newIndex;
    }

    switchPicture(object, index) {
        this.popUp.picture.setAttribute('src', this.pictures[this.currentIndex]);
    }
}
