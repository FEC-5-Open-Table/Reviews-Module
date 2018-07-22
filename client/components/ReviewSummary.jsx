import LovedForBox from "./LovedForBox.jsx";
import chartjs from 'chartjs';
import {Bar} from 'react-chartjs-2';

class ReviewSummary extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        console.log(this.props.allReviews)
        axios.get(`/reviews/${3}`)
        .then(res => {
            this.setState({
                reviews: res.data,
                allReviews: res.data
            })
            let fiveStarCount, fourStarCount, threeStarCount, twoStarCount, oneStarCount;
            fiveStarCount=fourStarCount=threeStarCount=twoStarCount=oneStarCount=0;
            for (let i = 0; i < this.state.allReviews.length; i++) {
                let r = this.state.allReviews[i].overallRating;
                if (r === 1) oneStarCount++;
                if (r === 2) twoStarCount++;
                if (r === 3) threeStarCount++;
                if (r === 4) fourStarCount++;
                if (r === 5) fiveStarCount++;
            }
            const counts = [0, fiveStarCount, fourStarCount, threeStarCount, twoStarCount, oneStarCount]
            const percentages = counts.map(count => count / this.state.reviews.length * 100);
            console.log(counts)
            for (let i = 5; i > 0; i--) {
                let el = document.getElementById('ratingBar' + i);
                el.style.paddingRight = percentages[i] + "%";
                el.style.backgroundColor = "red";
            }
        })
        .catch(err => console.log(err));
    }
    render() {
        let noiseLevel, starSource;
        if (this.props.ratings.noise > 1) {
            noiseLevel = 'Loud';
        } else if (this.props.ratings.noise < 1 && this.props.ratings.noise > 0) {
            noiseLevel = 'Moderate';
        } else {
            noiseLevel = 'Quiet';
        }
        this.props.stars ? starSource = this.props.stars : starSource = ['','','','',''];
        return (
            <div id="reviewSummaryContainer">
                <div>
                    <div className="summaryHeader">What {this.props.allReviews.length} People Are Saying</div>
                    <div>
                        <div id="leftSummaryContainer">
                            <div><strong>Overall ratings and reviews</strong></div>
                            <div id="reviewConditional">Reviews can only be made by diners who have eaten at this restaurant</div>
                            <div>
                                <div className="summaryStarRating">
                                    <span><img className="star" src={starSource[0]}/></span>
                                    <span><img className="star" src={starSource[1]}/></span>
                                    <span><img className="star" src={starSource[2]}/></span>
                                    <span><img className="star" src={starSource[3]}/></span>
                                    <span><img className="star" src={starSource[4]}/></span>
                                </div>
                                <div className="summaryStarRating">
                                    <span> &nbsp; {this.props.ratings.totalAverage}</span>
                                    <span> Based on Recent Ratings</span>
                                </div>
                            </div>
                            <div>
                                <div className="summaryRating" id="summaryFirstRating">
                                    <div><strong>{this.props.ratings.foodAverage}</strong></div>
                                    <div>Food</div>
                                </div>
                                <div className="summaryRating">
                                    <div><strong>{this.props.ratings.serviceAverage}</strong></div>
                                    <div>Service</div>
                                </div>
                                <div className="summaryRating">
                                    <div><strong>{this.props.ratings.ambianceAverage}</strong></div>
                                    <div>Ambiance</div>
                                </div>
                                <div className="summaryRating">
                                    <div><strong>{this.props.ratings.valueAverage}</strong></div>
                                    <div>Value</div>
                                </div>
                            </div>
                            <div className="summarySpacingContainer">
                                <div className="inlineBlock">
                                    <span><img className="summaryIcon" src="./images/risingBars.png" /></span>
                                    <span><strong>Noise &#8226;</strong><span> {noiseLevel}</span></span>
                                </div>
                            </div>
                            <div className="summarySpacingContainer">
                                <div className="inlineBlock">
                                    <span><img className="summaryIcon" src="./images/thumbsUp.png" /></span>
                                    <span><strong>{this.props.ratings.recommended}% of people</strong> <span>would recommend it to a friend</span></span>
                                </div>
                            </div>
                        </div>
                        <div id="summaryToolbarContainer">
                            <div>
                                <div className="toolbarAndNumber" onClick={() => this.props.filter(5)}>
                                    <span className="toolbarNumber">5</span>
                                    <span className="toolbarBox"><span id="ratingBar5"></span></span>
                                </div>
                                <div className="toolbarAndNumber" onClick={() => this.props.filter(4)}>
                                    <span className="toolbarNumber">4</span>
                                    <span className="toolbarBox"><span id="ratingBar4"></span></span>
                                </div>
                                <div className="toolbarAndNumber" onClick={() => this.props.filter(3)}>
                                    <span className="toolbarNumber">3</span>
                                    <span className="toolbarBox"><span id="ratingBar3"></span></span>
                                </div>
                                <div className="toolbarAndNumber" onClick={() => this.props.filter(2)}>
                                    <span className="toolbarNumber">2</span>
                                    <span className="toolbarBox"><span id="ratingBar2"></span></span>
                                </div>
                                <div className="toolbarAndNumber" onClick={() => this.props.filter(1)}>
                                    <span className="toolbarNumber">1</span>
                                    <span className="toolbarBox"><span id="ratingBar1"></span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Bar data={  
                        labels: ["January", "February", "March", "April", "May", "June", "July"],
                        datasets: [{
                        label: "My First dataset",
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: [0, 10, 5, 2, 20, 30, 45],
                        }]
                        
                    } /> */}
                
                    <div id="lovedForContainer">
                        <div>
                            <div  id="lovedForContainer"><strong>Loved For </strong><a href="#"><img className="summaryIcon" src="./images/infoIcon.png" /></a></div>
                            <div >
                                {this.props.lovedFor.map(item => <LovedForBox lovedFor={item} key={item.id}/>)}
                            </div>
                        </div>
                    </div>


                    <div><a href="#">Best Restaurants in (restaurant area)</a></div>
                </div>
            </div>
        )
    }
}

export default ReviewSummary;