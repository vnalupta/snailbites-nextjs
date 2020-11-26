/** @jsx jsx */
import { jsx } from 'theme-ui'

import React from 'react';
import styles from './cv.module.scss';
import Layout from '../../components/layout'


import { ThemeProvider } from 'theme-ui'
import { GlobalTheme } from 'src/theme/theme';

const CV: React.FC = () => {    
    return (
        <ThemeProvider theme={GlobalTheme}>
        <Layout>
            <h1 className={styles.title}>
                Vincent Nalupta
                        </h1>
            <p>
                I've been working on the web for over 13 years.
                Eight of those years were spent in e-commerce. At
                this point in my career I've seen it all and built
                it all. I believe in the free and open web as a
                conduit for the sharing of information. This
                information should be accessible to all people of
                all abilities.
                        </p>

            <p>
                I've spent the past few years building design
                systems to great success. My experience in
                e-commerce allows me to tweak the design system to
                AB test the user funnels. Some of my biggest wins
                came from the smallest of code changes.
                        </p>

            <p>
                I love to design. I love opening sketch and making
                anything I can think of (like this site). I've spent
                time executing designs for clients and then
                immediately building them in code. To me, code and
                design are simply different tools to accomplish an
                end product.
                        </p>

            <p>
                I now manage a team of engineers that handle
                everything from managing and maintaing our
                Javascript framework, to building and scaling our
                design system. After spending years building
                features for the core ordering flow, I get to
                oversee the very bottom and very top of our stack. I
                get to understand the product in a way that few
                people can.
                        </p>

            <p><a href={`../resume-011420_UX.pdf`}>Download this CV</a>
                <br />
                <span className="small">current as of August 1, 2020</span></p>

            <h3>Highlights</h3>
            <dl>
                <dt>Awards</dt>
                <dd>CSS Dev Conf 2017 - "Best Of" Speaker</dd>
                <dd>
                    CommArts Webpick of the Day
                                <ul styles={styles.noTopPad}>
                        <li>
                            <a
                                href={`https://www.commarts.com/webpicks/timothy-goodman`}
                            >
                                Read the writeup
                                        </a>
                        </li>
                        <li>
                            <a
                                href={`https://friendly-kare-ac2a16.netlify.app/`}
                            >
                                View a demo of Home and About pages
                                        </a>
                        </li>
                    </ul>
                </dd>
                <dt>Talks</dt>
                <dd>
                    CSS Dev Conf 2017{" "}<a
                        href={`https://speakerdeck.com/snailbites/patterns-language-and-the-tale-of-the-million-dollar-button-2`}
                    >
                        Patterns, Language, and the Tale of the
                        Million Dollar Button
                                </a>
                </dd>
                <dd>
                    CSS Dev Conf 2016{" "}<a
                        href={`https://speakerdeck.com/snailbites/konmaricss`}
                    >
                        KonMari CSS
                                </a>
                </dd>

                <dt>Writing</dt>
                <dd>
                    <a
                        href={`https://bytes.grubhub.com/how-user-testing-refines-our-pattern-library-development-e61323aeaaf6`}
                    >
                        How User Testing Refines our Pattern Library
                                </a>
                </dd>
                <dd>
                    <a
                        href={`https://bytes.grubhub.com/how-we-architect-our-pattern-library-using-design-apis-b2ca2df2233c`}
                    >
                        Design APIs
                                </a>
                </dd>
            </dl>

            <h3>Tools I Use</h3>
            <ul>
                <li>React</li>
                <li>Next.js</li>
                <li>Gatsby</li>
                <li>Angular</li>
                <li>Node</li>
                <li>SCSS</li>
                <li>Typescript</li>
                <li>Sketch</li>
            </ul>

            <h3>Education</h3>
            <p>University of Maryland at College Park - <a href="https://www.cs.umd.edu/about">B.S Computer Science</a></p>

            <h4>Grubhub</h4>
            <h5>Team Lead</h5>
            <p>As one of three Front End Team Leads, I have three key areas of responsibility:</p>
            <ul>
                <li>
                    Core JavaScript Framework and Typescript
                                </li>
                <li>Design Systems</li>
                <li>Accessibility</li>
            </ul>
            <p>
                My team is composed of three front end engineers in
                house and one offshore. Since we are non-product
                facing, I directly manage our product backlog and
                roadmap.
                        </p>

            <p className={styles.bottomPad}>
                Historically, I have been responsible for optimal
                CSS delivery and architecture. Hyper-focused on
                paint and load times, performance bottlenecks, and
                optimal asset delivery. I also provide assistance to
                all Front End Engineers on CSS and any of our three
                areas of responsibility.
                        </p>

            <h5>Senior Front End Software Engineer</h5>
            <p>
                Manager of the Front-End Style Guide (Pattern
                Library), often sitting at the intersection of
                Design, Product, and Engineering. Consistently
                shipped features that were among the highest
                grossing on the web team.
                        </p>

            <h4>J.Crew</h4>
            <h5>Front End Engineer</h5>
            <ul>
                <li>Front End scrum lead for $6 billion fashion company.</li>
                <li>Consistently met tight deadlines in a fast-paced,
                            high output, Agile scrum team.</li>
                <li>Regularly recognized
                and awarded at company all-hands for exemplary work
                on the most highly trafficked pages (Product Detail
                            Page, Search & Sale).</li>
            </ul>

            <h4>Noble Desktop</h4>
            <h5>Instructor</h5>
            <p>
                Taught full CSS course and front end development to continuing education
                students as part of the web development curriculum.
                        </p>

            <h4>Look North Inc.</h4>
            <h5>Web Developer & Designer</h5>
            <p>
                Front End Developer in the Expression Engine CMS,
                            creating sites for high profile clients including:</p>
            <ul>
                <li>ESPN</li>
                <li>Jessica Seinfeld</li>
                <li>Tim Goodman</li>
                <li>Suzie Orman</li>
            </ul>
            <p>
                and other NYC personalities and small businesses. Spent 25% of
                            time designing.</p>


            <h4>Seton Hall University</h4>
            <h5>Web Developer & Designer</h5>
            <p>
                Worked in WordPress an PHP MySQL apps. Spent 20% of
                time designing.
                        </p>
        </Layout>
        </ThemeProvider>
    )
}

export default CV