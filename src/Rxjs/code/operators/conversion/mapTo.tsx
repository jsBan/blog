import React, { useEffect } from 'react'
import { fromEvent, interval } from 'rxjs'
import { mapTo } from 'rxjs/operators'
import 'rxjs/add/operator/observeOn'
import { setHtml } from '../../../../utils/htmlTool'

const Index: React.FC = props => {
  useEffect(() => {
    // 例1：每2秒发出一个值， 将所有发出值映射成同一个值
    const source = interval(1000).pipe(mapTo('HELLO WORLD!'))
    const subscription = source.subscribe(val => setHtml('mapToOutput', val))
    setTimeout(() => {
      subscription.unsubscribe()
    }, 1000)
    // 例2： 将点击映射成字符串
    // const source2 = fromEvent(document, 'click').pipe(mapTo('GOODBYE WORLD!'));
    // source2.subscribe(val => setHtml('mapToOutput', val));
  }, [])

  return (
    <>
      <div>输出:</div>
      <div id="mapToOutput" />
    </>
  )
}
export default Index
