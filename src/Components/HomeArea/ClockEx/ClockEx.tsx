import { Component } from "react";
import "./ClockEx.css";
import notifyService from "../../../Services/NotifyService";

interface ClockExProps {
	format: "12h" | "24h";
}

interface ClockExState {
	time:string
}

// class ClockEx extends Component { // NO Props, No State
// class ClockEx extends Component<ClockExProps> { // Only Props, No State
// class ClockEx extends Component<{}, ClockExState> { // NO Props, Only State
class ClockEx extends Component<ClockExProps, ClockExState> {

    private timerId:number;

    public constructor(props: ClockExProps) { // Only for initial state
        super(props); // If using ctor must call the super
        this.state = { // Initial state
			time: "",
        };
    }


    private getTime():string{
        const date = new Date();
        // const time = date.toLocaleTimeString('en-US', { hour12: this.props.format === "12h" });
        // const hour12 = this.props.format === "12h";
        const hour12 = this.props.format === "12h" ? true : false;
        const time = date.toLocaleTimeString('en-US', { hour12 });
        return time;
    }


    // Same as useEffect:
    public componentDidMount():void{
        this.timerId = window.setInterval(()=>{
            this.setState({ time: this.getTime() })
        }, 1000);
    }

    // componentDidUpdate(prevProps: Readonly<ClockExProps>, prevState: Readonly<ClockExState>, snapshot?: any): void {}

    public dispalyTime = () => {
        const time = this.getTime();
        notifyService.success(time);
    }

    public render(): JSX.Element {
        return (
            <div className="ClockEx box">
                <span>{this.props.format}</span>
                <br />
				<span>{this.state.time}</span>
                <br />
                <button onClick={this.dispalyTime}>Display Time</button>
            </div>
        );
    }


    public componentWillUnmount():void{
        window.clearInterval( this.timerId );
    }
}

export default ClockEx;
