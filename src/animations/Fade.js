import React from 'react';
import {Animated, Easing} from "react-native";

export default class Fade extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: new Animated.Value(props.initValue)
        }
    }
    componentDidMount() {
        const {toValue, duration} = this.props
        Animated.timing(
            this.state.value,
            {
                toValue: toValue ?? 1,
                duration: duration ?? 5000,
                easing: Easing.linear
            }
        ).start()
    }

    render() {
        return (
            <Animated.View style={[this.props.customStyles, {opacity: this.state.value}]}>
                {this.props.children}
            </Animated.View>
        )
    }
}
//
// export const Fade = (props) => {
//     const {initValue, toValue, duration, customStyles} = props
//     const [value, setValue] = useState(new Animated.Value(initValue ?? 0))
//
//     useEffect(() => {
//         Animated.timing(
//             value,
//             {
//                 toValue: toValue ?? 1,
//                 duration: duration ?? 5000,
//                 easing: Easing.linear
//             }
//         ).start()
//     }, [])
//
//     return (
//         <Animated.View style={[customStyles, {opacity: value}]}>
//             {props.children}
//         </Animated.View>
//     )
// }
