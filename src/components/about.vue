<template>
  <div class="aboutme">
    <h1 class="title is-2 is-spaced"> Takumi Ito / 伊藤 拓海</h1>
    <div class="subtitle is-6">
      <p>東北大学大学院 情報科学研究科 システム情報科学専攻<br>乾・鈴木研究室 博士前期課程1年</p>
      <p>Langsmith株式会社 共同創業者 取締役</p>
    </div>
    <section id=education class="section">
      <div class="container">
        <div class="box">
          <h2 class="title is-4">Education</h2>
          <table class="table is-narrow">
            <tbody>
              <tr v-for="content in education" v-bind:key=content.date>
                <td style="width:10%"><span cen v-html="content.date"></span></td>
                <td><span v-html="content.text"></span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <section id=awards class="section">
      <div class="container">
        <div class="box">
          <h2 class="title is-4">Award</h2>
          <table class="table is-narrow">
            <tbody>
              <tr v-for="award in awards" v-bind:key=award.date>
                <td style="width:10%"><span v-html="award.date"></span></td>
                <td><span v-html="award.text"></span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section id=publications class="section">
      <div class="container">
        <div class="box">
          <h2 class="title is-4">Publications</h2>
          <ol>
            <li v-for="pub_content in publications" v-bind:key="pub_content">{{  pub_content.text }}</li>
          </ol>
        </div>
      </div>
    </section>

    <section id=activities class="section">
      <div class="container">
        <div class="box">
          <h2 class="title is-4">Activities</h2>
          <table class="table is-narrow">
            <tbody>
              <tr v-for="activity in activities" v-bind:key=activity.date>
                <td style="width:10%"><span v-html="activity.date"></span></td>
                <td><span v-html="activity.text"></span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'aboutme',
  data () {
    return {
      education: [
        {date: '2018/3', text: '東北大学 工学部 情報知能システム総合学科学科 卒業'}
      ],
      awards: [
        {date: '2018/3', text: '東北大学 総長賞'}
      ],
      publications: [
        {text: '伊藤拓海, 山口健史, 田然, 松田耕史, 岡崎直観, 乾健太郎. 自治体FAQの比較マイニング. 言語処理学会第24回年次大会, pp.536-539, March 2018.'},
        {text: '伊藤拓海, 鈴木正敏, 田然, 山口健史, 岡崎直観, 乾健太郎. 自治体QAサービスのためのFAQの自治体間の横断的解析. 第12回NLP若手の会 シンポジウム (YANS), September 2017.'}
      ],
      activities: [
        {date: '2017', text: 'JPHACKS 2017 &emsp; 決勝進出 デザインワンジャパン賞'},
        {date: '2018/5', text: 'Langsmith株式会社設立 &emsp; 共同創業者 取締役 就任'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
ol {
  padding: 3%;
}
li {
  /* display: inline-block; */
  /* margin: 0 10px; */
  text-align:left
}
a {
  color: #42b983;
}
.aboutme {
  text-align: center;
  margin: 2%;
  margin-bottom: 5%;
  padding-top: 5%;
}
</style>
