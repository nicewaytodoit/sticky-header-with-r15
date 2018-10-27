import React, { Component } from 'react';

class Page1 extends Component {
    constructor(props) {
        super(props);
        console.log("@ 1st: Constructor");
    }

    componentWillMount() {
        console.log("@ 1st: Will Mount");
    }

    componentDidMount() {
        console.log("@ 1st: DID Mount");
    }

    componentWillReceiveProps() {
        console.log("@ 1st: Will Recieve Props");
    }

    componentWillUpdate() {
        console.log("@ 1st: Will Update");
    }

    componentDidUpdate() {
        console.log("@ 1st: DID Update");
    }

    componentWillUnmount() {
        console.log("@ 1st: will UN-Mount");
    }

    render() {
        console.log("@ 1st: RENDER");
        return (
            <div className="">
                <h1>1st Page</h1>
                <p>
                    This is just some page with text:
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales ullamcorper vehicula.
                    Barclays is worst bank ever. Duis placerat quam porta lorem lobortis, sit amet sodales mauris finibus. Donec posuere diam at volutpat viverra. Cras fringilla auctor augue sed congue. Maecenas mollis quis enim quis egestas. In sollicitudin mi a pretium varius. Integer eleifend sodales pharetra. Nullam vitae libero sem. Nulla et eros congue, tincidunt ante eu, tincidunt eros. Donec nisl purus, convallis a hendrerit ut, eleifend in lectus. Proin luctus dignissim lacus, in laoreet arcu eleifend non. Quisque viverra ipsum a massa porta convallis.
                    Donec tincidunt imperdiet purus, interdum elementum ante commodo a. Quisque pharetra arcu sapien, vel ornare magna sollicitudin quis.
                  </p>
            </div>
        )
    }
}

export default Page1;