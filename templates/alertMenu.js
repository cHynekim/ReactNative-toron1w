import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Chat from "../assets/img/chat.png";
import Notice from "../assets/img/notice.png";

const styles = StyleSheet.create({
    menu : {
        width : '100%',
        height : 60,
        marginBottom : 5,
        flexDirection : 'row',
        backgroundColor : '#fff'
    },
    alertPt : {
        flex : 1,
        flexDirection : 'column',
        alignItems : 'flex-end'
    },
    alertTypeImg : {
        width : '50%',
        height : '50%',
        marginTop : 5,
        marginRight : 6
    },
    alertNewImg : {
        width : '8%',
        height : '8%',
        zIndex : 1,
        position : "absolute",
        top : 3,
        right : 3,
        resizeMode : "contain"
    },
    contPt : {
        flex : 4,
        paddingLeft : 5,
        flexDirection : 'column',
        justifyContent : "space-evenly"
    },
    title : {
        fontSize : 10,
        color : '#666'
    },
    desc : {
        fontSize : 12,
        color : '#222'
    },
    datePt : {
        flex : 1,
        alignItems : 'center'
    },
    dateTxt : {
        fontSize : 10,
        color : '#666',
        paddingTop : 5
    }
});

const AlertMenu = (props)=>{
    
    const list = props.data.map((data) => {
        let imageSource = null;
        for(let j = 0; j<props.icon.length; j++){
            imageSource = props.icon[j].type === data.type ? Chat : Notice;
        }

        let dateText;

        let dateYear = data.date.getFullYear();
        let todayYear = props.today.getFullYear();
        let dateMonth = data.date.getMonth();
        let todayMonth = props.today.getMonth();
        let dateDay = data.date.getDate();
        let todayDay = props.today.getDate();
        console.log(dateMonth, todayMonth);
        if(dateYear === todayYear){
            if(dateMonth == todayMonth){
                if(dateDay == todayDay){
                    dateText = '오늘';
                }
                else if(dateDay+1 == todayDay){
                    dateText = '어제';
                }
                else{
                    dateText = `${dateMonth+1}월 ${dateDay}일`;
                }
            }
        }
        
        return (
            <TouchableOpacity
                key={data.id}
                activeOpacity={0.8}
                style={styles.menu}
                onPress={(e) => {
                    e.preventDefault();
                    props.onCheckedAlert(); //ref 사용해서 new.png 걸린 image 컴포 지우기
                }}
            >
                <View style={styles.alertPt}>
                    <Image source={imageSource} style={styles.alertTypeImg}/>
                    <Image source={require('../assets/img/new.png')} style={styles.alertNewImg}></Image>
                </View>
                <View style={styles.contPt}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.desc}>{data.desc}</Text>
                </View>
                <View style={styles.datePt}>
                    <Text style={styles.dateTxt}>{dateText}</Text>
                </View>
            </TouchableOpacity>
        );
    });

    return (
        <View>
            {list}
        </View>
    );
}

export default AlertMenu; 