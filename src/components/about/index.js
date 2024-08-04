import { Box, Heading, Link, Text } from 'gestalt';

function About() {
  return (
    <Box>
      <Heading>About Me</Heading>
      <Text>
        <p>I'm a programmer, a Japanese music enthusiast and hobby translator. I built this site to practice web development and share my translations.</p>
        <p>I try to make my translations as expressive as possible, while not deviating from the literal meaning of the original. The goal is a translation that could be quality English song lyrics (but without the rhyme).</p>
        <p>Sometimes I'll re-translate something that already exists on the internet but with some grammatical mistakes or translation mistakes. I'll credit them when I do.</p>
        <Box display="flex">Find me on <Text display="inline" color="shopping"><Link display="inline" href='https://www.youtube.com/channel/UC0xE-0jjE0IBAxhozD4Hjfg'>Youtube</Link></Text></Box>
      </Text>
    </Box>
  );
}

export default About;