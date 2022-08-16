const helpers ={
    renderPage(page) {
        switch(page){
            case '1.1':
                return (
                    <div className="chapter-01-content">
                        <h3>1.1: About the PWK Course</h3>
                    </div>
                )
                break;
            case '1.2':
                return (
                    <div className="chapter-01-content">
                        <h3>1.2: Overall Strategies for Approaching Course</h3>
                    </div>
                )
                break;
        }
    }
}

export default helpers;