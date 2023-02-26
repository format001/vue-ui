import {ref} from 'vue'

export default function stars (num, callback) {
    const starNum = ref(num);

    const setStarNum = (num) => {
        starNum.value = num;
        callback();
    }

    return [
        starNum,
        setStarNum
    ]
}