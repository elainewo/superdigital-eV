import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import PropTypes from "prop-types";
import './afterfooter.css'

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.fontSize};
`;


function Snake(props) {
    const letters = Array.from(props.text);
    let count = 0;
    let height = 0;
    let heightIncrement = props.heightIncrement;
    let delay = props.delay;
    const delayConst = props.delayConst;

    function getLetter(letter) {
        delay += delayConst;

        if (letter === " ") {
            return "\u00A0";
        }
        else {
            return letter;
        }
    }

    function getSnakeHeight(index, letter) {
        if ((index + 1) % props.lenOfEachIncrement === 0) {
            heightIncrement = heightIncrement * -1;
        }
        const heightToReturn = height;
        height += heightIncrement;
        return heightToReturn;
    }


    function handleColor(letter) {
        if (props.colors !== undefined) {

            // Alternates Color
            if (letter === " ") {
                return;
            }
            if (count === props.colors.length) {
                count = 0;
                const color = props.colors[count];
                count++;
                return color;
            }
            else {
                const color = props.colors[count];
                count++;
                return color;
            }
        }
        else {
            // Picks a random color if no array is provided
            count++;
            return '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
        }
    }

    return (

        <Container transition={{ delay: props.delay }}>
            <Container fontSize={props.fontSize}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: props.delay }}>
                {letters.map((letter, index) => (
                    <motion.div key={index} initial={{ opacity: 0, color: "#0079fb" }}
                        animate={{ opacity: 1, y: getSnakeHeight(index, letter), scale: 1.5 }}
                        transition={{ delay: delay, loop: Infinity }}>
                        {getLetter(letter)}
                    </motion.div>
                ))
                }
            </Container >
            <Container fontSize={props.fontSize} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: props.delay }}>
                {letters.map((letter, index) => (
                    <motion.div key={index} initial={{ opacity: 0, color: "#0079fb" }}
                        animate={{ opacity: 1, y: getSnakeHeight(index, letter), scale: 1.5 }}
                        transition={{ delay: delay, loop: Infinity }}>
                        {getLetter(letter)}
                    </motion.div>
                ))
                }
            </Container >
        </Container>
    );
}

Snake.propTypes = {
    delayConst: PropTypes.number,
    heightIncrement: PropTypes.number,
    lenOfEachIncrement: PropTypes.number,
    text: PropTypes.string,
    fontSize: PropTypes.string,
    colors: PropTypes.array,
    delay: PropTypes.number
}

Snake.defaultProps = {
    delayConst: .09,
    heightIncrement: -7,
    lenOfEachIncrement: 4,
    text: "This is cool",
    fontSize: "4rem",
    delay: 0
}

export default Snake;