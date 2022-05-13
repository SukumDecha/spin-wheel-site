// Immediately invoked function expression
// to not pollute the global scope
(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  const display = document.querySelector('.display');

  var audio1 = document.createElement('audio');
  audio1.setAttribute('src', 'sound/spin-effect.mp3');


  let deg = 0;
  let zoneSize = 45; // deg

  // Counter clockwise
  const symbolSegments = {
    1: "(1) ความเพียรพยายามความมุ่งมั่นตั้งใจ แบบค่อยเป็นค่อยไป มีความพิถีพิถัน ละเอียดรอบคอบ ขยันขันแข็งเสมอต้นเสมอปลายในอดีตในเรื่องที่ผ่านมา วันนี้จะมีความสำเร็จ รางวัล ผลตอบแทน ความก้าวหน้า เลื่อนตำแหน่ง เป็นผู้นำกลุ่ม แผนกนั้น ๆ ชัยชนะ",
    2: "(2) ในเรื่องการเงินนั้นจัดว่าระยะนี้ยังมีเงินเข้ามาให้หมุนได้อย่างไม่ติดขัด อาจจะไม่ถึงกับลื่นไหลมากเท่าไรแต่ก็ยังไม่มีปัญหาเรื่องการเงินในระยะนี้ หากว่าในอดีตคุณมีปัญหาเรื่องการเงินมาก่อนก็แสดงว่าปัญหาเหล่านั้นจะค่อย ๆ บรรเทาลง ทำให้คุณคลายความกังวลได้ซักพัก แต่อย่างไรก็ตามอย่าเพิ่งสร้างปัญหาใหม่ด้วยการใช้เงินตามใจตัวเอง เพราะถึงแม้ว่าคุณจะหมุนเงินได้ทันท่วงทีก็ตาม แต่ก็จะทำให้การใช้เงินของคุณไม่เป็นระบบ และมีปัญหาตามมาได้อีกในอนาคต หากคุณทำธุรกิจของตัวเอง คุณอาจจะต้องรอบคอบในเรื่องเอกสารการเงินให้ดีด้วย ในคนที่คิดจะลงทุนอะไรใหม่ ๆ ควรศึกษาหาความรู้ในสินทรัพย์ที่จะลงทุนให้ดีซะก่อน อย่าเพิ่งเชื่อตามคำแนะนำของคนที่คุณรู้จัก เพราะหากไม่มีความรู้ด้านการลงทุนมากพออาจจะเกิดการขาดทุนได้",
    3: "(3) เป็นช่วงที่มีความมุ่งมั่นและต้องการอนาคตที่เป็นจริงเป็นจัง หากที่ผ่านมาคุณใช้จ่ายเงินตามสบายก็จะเริ่มวิตกกังวลเกี่ยวกับอนาคตทางด้านการเงินของคุณ มีความคิดที่อยากจะลงทุน หรือหาวิธีทำให้เงินที่มีอยู่งอกเงยเพิ่มขึ้น ในคนทำงานประจำคุณจะเริ่มประหยัดกว่าแต่ก่อน และมีความต้องการที่จะหาเงินให้ได้เพิ่มขึ้นกว่านี้ สำหรับคนทำธุรกิจส่วนตัวคุณอาจจะต้องจัดการเกี่ยวกับระบบการเงินของบริษัท ก็จะช่วยให้การเงินในองค์กรคล่องตัวมากขึ้นได้เช่นกัน นอกจากนี้การเงินโดยรวม ๆ ก็ยังถือว่าไม่ได้ติดขัดอะไร เรียกว่าจังหวะนี้ค่อนข้างมีเงินเข้ามาให้หมุนอย่างลื่นไหลด้วยซ้ำไป",
    4: "(4) การเงินในระยะนี้จะพอมีเข้ามาบ้าง แต่ว่าไม่มากนัก ดังนั้นอย่าเพิ่งชะล่าใจใช้เงินฟุ่มเฟือยเกินไป ควรเผื่อเงินฉุกเฉินเอาไว้จะดีกว่า หากก่อนหน้านี้คุณมีปัญหาหนักในเรื่องการเงิน ก็แสดงว่าช่วงนี้จะเริ่มเบาบางลงบ้าง แต่การเงินก็ยังไม่แน่ไม่นอน ในคนที่คิดจะลงทุนทำธุรกิจควรชะลอเวลาไปก่อน อย่าเพิ่งลงทุนในช่วงนี้ เพราะว่าอีกนานกว่าจะถอนทุนคืนได้ ยังไม่ใช่จังหวะที่เหมาะนัก ในบางคนอาจมีค่าใช้จ่ายในเรื่องของต่อเติมบ้าน หรือปรับปรุงที่ดินที่อยู่อาศัยก็ได้เช่นกัน โดยรวม ๆ แล้วดวงการเงินช่วงนี้จัดว่าไม่ถึงกับลำบาก แต่ก็ไม่มีให้ใช้ตามใจมากนัก หากรอข่าวการเงินอยู่อาจจะต้องทำใจว่ายังไม่ได้ดั่งใจนัก ยังต้องรอไปอีกซักพัก",
    5: "(5) การเงินในระยะนี้จะไม่ค่อยได้ดั่งใจคุณเท่าไรนัก ออกแนวเข้ามือซ้าย-จ่ายมือขวา มีเงินเข้ามาให้หมุนตลอดแต่เก็บไม่อยู่เลยซักนิด คุณควรทบทวนพฤติกรรมการใช้เงินของตัวเองในระยะที่ผ่านมาดูบ้างว่าใช้เงินตามอารมณ์มากไปหรือไม่ เพราะหากไม่ระมัดระวังคุณอาจจะพบกับภาวะเงินช็อตได้ ในคนที่คิดจะลงทุนอะไรก็ตามในช่วงนี้ควรเลื่อนไปก่อน เพราะมีโอกาสเสียหายมากกว่าได้เงิน โดยเฉพาะหากมีความคิดจะร่วมหุ้นลงขันกับใครควรเช็คให้รอบคอบด้วยจะได้ไม่เสียใจทีหลัง สำหรับคนที่เป็นเจ้าของกิจการ ระยะนี้การเงินยังพอมีเข้ามาให้ใช้จ่ายอยู่ แต่ก็ไม่ควรประมาทเพราะเงินที่เข้ามาเป็นเงินหมุนซะส่วนมาก",
    6: "(6) การเรียนในช่วงนี้จะค่อนข้างเครียด และหนักหนาสาหัสสำหรับคุณอย่างมาก คุณจะรู้สึกท้อและรู้สึกเหมือนว่าไม่ค่อยเข้าใจในวิชาเรียนบางวิชา ซึ่งคุณไม่ควรประมาท ถ้าหากว่าไม่เข้าใจคุณควรรีบปรึกษาอาจารย์หรือเพื่อน ไม่เช่นนั้นมันจะส่งผลให้คุณยิ่งไม่เข้าใจในการเรียนครั้งต่อ ๆ ไป หากมีการสอบในระยะนี้ คุณควรขยันเรียนรวมถึงทบทวนบทเรียนมาก ๆ ต้องระวังสอบตก มีโอกาสสูงที่คุณจะต้องมาสอบซ่อมเพราะประมาทกับวิชาเรียนบางวิชามากจนเกินไป นอกจากนั้นระวังความเครียดในเรื่องการเรียนส่งผลจนทำให้คุณป่วย หรือไม่สบายจากการนอนพักผ่อนไม่เพียงพอด้วย",
    7: "(7) หากการเรียนของคุณเกี่ยวข้องกับศิลปะ หรือวิชาที่ไม่เน้นการคำนวณมากนัก ผลการเรียนจะค่อนข้างออกมาดีกว่าที่คาดคิดเอาไว้ แต่หากเป็นวิชาที่เกี่ยวกับการคำนวณอาจจะต้องรอบคอบกว่าปกติ เพราะมีโอกาสจะผิดพลาดได้ ช่วงนี้ควรระวังการนอนหลับไม่เพียงพอ เพราะจะส่งผลต่อการเรียน ทำให้เรียนไม่รู้เรื่องได้ หากมีการสอบแข่งขันในช่วงนี้โอกาสจะยังมีไม่มากนัก ควรตั้งใจให้มากกว่านี้ นอกจากนั้นหากมีความรู้สึกว่าข้อสอบจะออกแนวไหน ให้ลองเชื่อตามสัญชาตญาณของคุณดู เพราะมีแนวโน้มว่าจะเป็นไปตามนั้น",
    8: "(8) วันนี้จะมีเรื่องส่วนตัว เรื่องในบ้าน ในครอบครัว หรือธุระส่วนตัวเป็นเรื่องหลัก ให้ต้องจัดการ ดูแลเอาใจใส่ มากกว่าทุกวัน ความรักความอบอุ่นกับครอบครัว และไพ่ยังบอกว่าวันนี้อาจต้องเกี่ยวข้องกับผู้หญิงที่มีอายุตั้งแต่ 35 ปีขึ้นไป อาจเป็น แม่ หรือ ผู้หญิงที่สูงวัย",
  }

  const handleWin = (actualDeg) => {
    const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
    display.innerHTML = symbolSegments[winningSymbolNr];

  }

  startButton.addEventListener('click', () => {
    // Reset display
    display.innerHTML = "-.-.-.-.-.-.-.-.-.-.-.-กำลังสุ่ม-.-.-.-.-.-.-.-.-.-.-.-";
    // Disable button during spin
    startButton.style.pointerEvents = 'none';
    // Calculate a new rotation between 5000 and 10 000
    deg = Math.floor(5000 + Math.random() * 5000);
    // Set the transition on the wheel
    wheel.style.transition = 'all 11s ease-out';
     //Play sound
     audio1.play();
    // Rotate the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
    // Apply the blur
    wheel.classList.add('blur');
  });


  wheel.addEventListener('transitionend', () => {
    // Remove blur
    wheel.classList.remove('blur');
    // Enable button when spin is over
    startButton.style.pointerEvents = 'auto';
    // Need to set transition to none as we want to rotate instantly
    wheel.style.transition = 'none';
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Important because we want to start the next spin from that one
    // Use modulus to get the rest value
    const actualDeg = deg % 360;
    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    // Calculate and display the winning symbol
    handleWin(actualDeg);
  });
})();
