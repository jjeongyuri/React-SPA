import './About.css';

export default function About(){
    return(
        <>
        <div id="box13">
            <div>
                <h2>친절함의 문화</h2>
                <p>우리는 환경을 보호하고 지역사회의 안녕을 위해 책임을 져야 한다는 것을 알고 있습니다. 이를 위해 친절함은 우리가 하는 모든 일의 초석이 됩니다.</p>
                <div className="about">
                   <div className="we">
                      <img src={"../img/box13_pic01.avif"} alt="자선활동"/>
                      <p>우리의 자선활동 미션</p>
                      <p>우리는 편견과 낙인에 맞서는 정신건강 관련 프로젝트 그리고 영감을 주는 자선단체들을 지원하기 위해 최선을 다하고 있습니다.</p>
                    </div> 
                   <div className="pratic">
                      <img src={"../img/box13_pic02.jpg"} alt="지속가능성"/>
                      <p>지속가능성을 위한 우리의 활동</p>
                      <p>자연은 영원히 조 말론 런던의 뮤즈로서, 보다 지속가능한 미래를 향해 나아가면서 환경 보호에 있어 의미있는 역할을 하고자 합니다.</p>
                    </div> 
                </div>
            </div>
        </div>
        <div id="box14">
            <div>
                <img src={"../img/box14.avif"} alt="우리"/>
                <p>우리의 사람 & 우리의 일터</p>
                <p>인재를 육성하고 팀의 안녕을 제고하는 것은 매우 중요한 일입니다. 포용성이 인정되며 누구나 환영받을 수 있는 일터를 만들기 위해 최선을 다하고 있습니다.</p>
            </div>
        </div>
        </>
    )
}