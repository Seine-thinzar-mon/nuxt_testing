<template>
    <!-- Header -->

    <!-- Desktop menu -->
    <div class="bg-white hidden lg:flex justify-between align-middle">
        <img src="../assets/images/mhy_logo.png" class="w-[123px] mx-5 my-4">
        <div class="flex items-center">
            <ElMenu class="" text-color="#404041" active-text-color="#894517" mode="horizontal"
                background-color="transparent" :ellipsis="false" :default-active="1">
                <ElMenuItem index="1">หน้าหลัก</ElMenuItem>
                <ElSubMenu index="2">
                    <template #title>วัดมเหยงคณ์</template>
                    <ElMenuItem index="2-1">item one</ElMenuItem>
                    <ElMenuItem index="2-2">item two</ElMenuItem>
                    <ElMenuItem index="2-3">item three</ElMenuItem>
                </ElSubMenu>
                <ElMenuItem index="3">สื่อธรรมะ</ElMenuItem>
                <ElMenuItem index="4">ถ่ายทอดสด</ElMenuItem>
                <ElSubMenu index="5">
                    <template #title>สมัครปฏิบัติธรรม</template>
                    <ElMenuItem index="5-1">item one</ElMenuItem>
                    <ElMenuItem index="5-2">item two</ElMenuItem>
                    <ElMenuItem index="5-3">item three</ElMenuItem>
                </ElSubMenu>
                <ElMenuItem index="6">ติดต่อสอบถาม</ElMenuItem>
            </ElMenu>
        </div>
        <div class="bg-[#894517] text-gray-200 text-sm flex flex-wrap justify-center items-center px-5">
            <img src="../assets/images/transparent_mhy_logo.png" class="h-[48px]">
            <div class="text-center w-full flex justify-center items-center">
                <div class="cursor-pointer hover:text-white">เข้าสู่ระบบ</div> ・ <div class="cursor-pointer">สมัครสมาชิก
                </div>
            </div>
        </div>
    </div>
    <!-- Mobile menu -->
    <div class="bg-white flex sm:flex lg:hidden align-middle justify-center">
        <img src="../assets/images/mhy_logo.png" class="w-[123px] mx-5 my-4">
        <div class="absolute top-0 left-0 border" @click="isMenuOpen = !isMenuOpen">
            |||
        </div>

    </div>
    <Transition name="slide-fade">
        <div class="absolute flex justify-center z-10 bg-white w-full h-screen" v-if="isMenuOpen">
            <div class="w-fit place-content-center">
                <ElMenu class="" text-color="#404041" active-text-color="#894517" mode="verticle"
                background-color="transparent" :ellipsis="false" :default-active="1">
                <ElMenuItem index="1">หน้าหลัก</ElMenuItem>
                <ElSubMenu index="2">
                    <template #title>วัดมเหยงคณ์</template>
                    <ElMenuItem index="2-1">item one</ElMenuItem>
                    <ElMenuItem index="2-2">item two</ElMenuItem>
                    <ElMenuItem index="2-3">item three</ElMenuItem>
                </ElSubMenu>
                <ElMenuItem index="3">สื่อธรรมะ</ElMenuItem>
                <ElMenuItem index="4">ถ่ายทอดสด</ElMenuItem>
                <ElSubMenu index="5">
                    <template #title>สมัครปฏิบัติธรรม</template>
                    <ElMenuItem index="5-1">item one</ElMenuItem>
                    <ElMenuItem index="5-2">item two</ElMenuItem>
                    <ElMenuItem index="5-3">item three</ElMenuItem>
                </ElSubMenu>
                <ElMenuItem index="6">ติดต่อสอบถาม</ElMenuItem>
            </ElMenu>
            </div>
        </div>
    </Transition>


    <!-- Body -->
    <div class="bg-[url('../assets/images/home_banner.png')] bg-cover bg-no-repeat text-white min-h-[70vh] sm:min-h-[70vh] md:min-h-[90vh] lg:min-h-[90vh]"
        style="background-position: 35% 20%;">
        <div class="p-[80px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] hidden sm:hidden md:block lg:block">
            <div class="max-w-[590px] text-[45px] font-medium ">
                Say hello to a whole new way of feeling welcome
            </div>
            <div class="max-w-[430px] text-[24px] mt-5">
                Sample the world, enjoy attentive service and world-class amenities.
            </div>
        </div>
    </div>

    <div class="bg-[#FFFDF4]">
        <div class="grid grid-cols-12 gap-4 py-0 sm:py-0 md:py-3 lg:py-[80px] align-middle">
            <div
                class="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-7 xl:col-span-7 grid content-between p-5 sm:p-5 md:p-6 lg:p-[40px]">
                <div class="mx-0 sm:mx-0 md:mx-0 lg:mx-[40px]">
                    <div class="text-4xl font-medium text-[#894517]">
                        ประวัติวัดมเหยงคณ์ในอดีต
                    </div>
                    <div class="text-[20px] text-[#808284] mt-4">
                        วัดมเหยงคณ์ เดิมเป็นพระอารามหลวงฝ่ายวิปัสสนาธุระ ที่เคยสำคัญยิ่งมาในอดีตสมัยอยุธยา
                        โดยสมเด็จพระบรมราชาธิราชที่ ๒ (เจ้าสามพระยา) ทรงสร้างขึ้นและได้รับการปฏิสังขรณ์หลายครั้งในหลายสมัย
                        แต่ได้กลายเป็นวัดร้าง เข้าใจว่านับตั้งแต่เสียกรุงศรีอยุธยาครั้งที่ ๒ ในปี พ.ศ. ๒๓๑๐ รวมเวลาร่วงเลยมา
                        ๒๐๐ กว่าปี ปัจจุบันเป็นวัดร้างที่สภาพโบราณ สถานและโบราณวัตถุที่ยังเหลืออยู่ได้ปรักหักพังไปมาก
                        แต่ก็พอมีเค้าเป็น หลักฐานบ่งบอกถึงศิลปะการก่อสร้างอันประณีตงดงามมโหฬารและระดับความสำคัญของพระอารามแห่งนี้ได้เป็นอย่างดี
                    </div>
                </div>
                <div class="flex justify-end mt-1">
                    <ElButton class="btn_style1">
                        อ่านเพิ่มเติม
                    </ElButton>
                </div>
            </div>
            <div
                class="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-5 xl:col-span-5 flex items-center px-6 sm:px-6 md:px-6 lg:px-0 pb-6 sm:pb-6 md:pb-6 lg:pb-0">
                <img src="../assets/images/temple_profile.png" class="w-full" />
            </div>
        </div>
    </div>

    <div class="bg-[url('../assets/images/meditaion_course.png')] bg-cover bg-no-repeat text-white bg-center">
        <div class="py-[100px] flex justify-center bg-[rgba(0,0,0,0.5)]">
            <div class="text-center max-w-[60vw]">
                <div class="text-4xl font-medium">สมัครปฏิบัติธรรม</div>
                <div class="text-base my-5">
                    การปฏิบัติธรรมเป็นการเอาธรรมะมาใช้ในชีวิตประจำวัน จนทำให้ชีวิตมีการอยู่ด้วยธรรม คือรู้ความสงบภายในจิตใจ
                    เป็นกระบวนการพัฒนาจิตใจและปัญญาที่พระพุทธศาสนาเรียกว่า วิปัสสนา
                    การปฏิบัติธรรมมีความสำคัญในด้านการพัฒนาตน
                    เพราะทำให้ตนมีความเจริญในธรรมตามลำดับ
                </div>
                <ElButton class="btn_style2">
                    ดูรายละเอียดคอร์ส
                </ElButton>
            </div>
        </div>
    </div>

    <div class="p-5 sm:p-5 md:p-6 lg:p-[40px]">
        <div class="text-center font-medium text-4xl text-[#894517]">
            ข่าวสารประชาสัมพันธ์
        </div>
        <div class="grid grid-cols-12 gap:15 sm:gap-15 md:gap-16 lg:gap-16 p-0 sm:p-0 md:p-0 lg:p-[40px]">
            <div v-for="v in whatsOn"
                class="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 mb-10 sm:mb-10 md:mb-0 lg:mb-0">
                <div class="">
                    <img src="../assets/images/whatsOn_img1.png" class="w-full" />
                </div>
                <div class="text-[24px] whitespace-normal font-medium text-[#404041] mt-6 mb-4">
                    {{ v.title }}
                </div>
                <div class="text-base text-[#808284]">
                    {{ v.detail }}
                </div>
            </div>
        </div>
    </div>

    <div class="bg-[#404041] p-5 sm:p-5 md:p-6 lg:p-[40px]">
        <div
            class="bg-[url('../assets/images/media_book.png')] bg-cover bg-no-repeat bg-center object-cover mx-0 sm:mx-0 md:mx-0 lg:mx-[40px]">
            <div
                class="py-[100px] flex justify-center sm:justify-center md:justify-end lg:justify-end bg-[rgba(0,0,0,0.1)]">
                <div class="w-[90%] sm:w-[90%] md:w-[55%] lg:w-[55%] bg-white p-10">
                    <div class="font-medium text-4xl text-[#E5B368]">
                        หนังสือธรรมะดิจิทัล e-book
                    </div>
                    <div class="text-base text-[#808284] mt-2 mb-4">
                        หนังสือธรรมะได้เผยแผ่หลักธรรมของศาสนาพุทธ
                        โดยคำสอนจะมุ่งให้มนุษย์ ดำเนินชีวิตอยู่บนทางสายกลางระหว่างการเพิกเฉยละเลย กับ การเคร่งครัด ตึงแน่น
                        หลักธรรมของชาวพุทธมีตั้งแต่เรื่องการใช้ปัญญาในการอยู่ บนโลกมนุษย์ไปจนถึงเป้าหมายแห่งความสงบสุขในชีวิต
                    </div>
                    <ElButton class="btn_style1">
                        READ MORE
                    </ElButton>
                </div>
            </div>
        </div>
        <div
            class="bg-[url('../assets/images/media_audio.png')] bg-cover bg-no-repeat bg-center object-cover mx-0 sm:mx-0 md:mx-0 lg:mx-[40px] mt-8">
            <div
                class="py-[100px] flex justify-center sm:justify-center md:justify-start lg:justify-start bg-[rgba(0,0,0,0.1)]">
                <div class="w-[90%] sm:w-[90%] md:w-[55%] lg:w-[55%] bg-white p-10">
                    <div class="font-medium text-4xl text-[#E5B368]">
                        เสียงธรรมเทศนา
                    </div>
                    <div class="text-base text-[#808284] mt-2 mb-4">
                        เสียงธรรมะได้เผยแผ่หลักธรรมของศาสนาพุทธ
                        โดยคำสอนจะมุ่งให้มนุษย์ ดำเนินชีวิตอยู่บนทางสายกลางระหว่างการเพิกเฉยละเลย กับ การเคร่งครัด ตึงแน่น
                        หลักธรรมของชาวพุทธมีตั้งแต่เรื่องการใช้ปัญญาในการอยู่ บนโลกมนุษย์ไปจนถึงเป้าหมายแห่งความสงบสุขในชีวิต
                    </div>
                    <ElButton class="btn_style1">
                        READ MORE
                    </ElButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const whatsOn = [
    {
        "src": "",
        "title": "งานฉากหลังพระประธานศาลาปฏิบัติธรรม ณ ภูธารธรรม",
        "detail": "ขอเชิญร่วมบุญเป็นเจ้าภาพงานฉากหลังพระประธานศาลาปฏิบัติธรรม ณ สำนักกรรมฐานภูธารธรรม ( สาขาวัดมเหยงคณ์ 14 ) อ.เทพสถิต จ.ชัยภูมิ"
    },
    {
        "src": "",
        "title": "ของใช้สำหรับห้องพัก สํานักกรรมฐาน ภูธารธรรม",
        "detail": "สำนักฯภูธารธรรม จ.ชัยภูมิ (สาขาวัดมเหยงคณ์) ได้จัดปฏิบัติธรรมมากว่า 10 ปี จนบัดนี้ได้ทำการสร้างศาลาและห้องพักสำหรับผู้ปฏิบัติธรรมทั้งพระสงฆ์และฆราวาส มีห้องน้ำในตัว เพื่อให้เหมาะแก่การปลีกวิเวก"
    },
    {
        "src": "",
        "title": "งานฉากหลังพระประธานศาลาปฏิบัติธรรม ณ ภูธารธรรม",
        "detail": "ขอเชิญร่วมบุญเป็นเจ้าภาพงานฉากหลังพระประธานศาลาปฏิบัติธรรม ณ สำนักกรรมฐานภูธารธรรม ( สาขาวัดมเหยงคณ์ 14 ) อ.เทพสถิต จ.ชัยภูมิ"
    },
    {
        "src": "",
        "title": "ของใช้สำหรับห้องพัก สํานักกรรมฐาน ภูธารธรรม",
        "detail": "สำนักฯภูธารธรรม จ.ชัยภูมิ (สาขาวัดมเหยงคณ์) ได้จัดปฏิบัติธรรมมากว่า 10 ปี จนบัดนี้ได้ทำการสร้างศาลาและห้องพักสำหรับผู้ปฏิบัติธรรมทั้งพระสงฆ์และฆราวาส มีห้องน้ำในตัว เพื่อให้เหมาะแก่การปลีกวิเวก"
    },
    {
        "src": "",
        "title": "งานฉากหลังพระประธานศาลาปฏิบัติธรรม ณ ภูธารธรรม",
        "detail": "ขอเชิญร่วมบุญเป็นเจ้าภาพงานฉากหลังพระประธานศาลาปฏิบัติธรรม ณ สำนักกรรมฐานภูธารธรรม ( สาขาวัดมเหยงคณ์ 14 ) อ.เทพสถิต จ.ชัยภูมิ"
    },
    {
        "src": "",
        "title": "ของใช้สำหรับห้องพัก สํานักกรรมฐาน ภูธารธรรม",
        "detail": "สำนักฯภูธารธรรม จ.ชัยภูมิ (สาขาวัดมเหยงคณ์) ได้จัดปฏิบัติธรรมมากว่า 10 ปี จนบัดนี้ได้ทำการสร้างศาลาและห้องพักสำหรับผู้ปฏิบัติธรรมทั้งพระสงฆ์และฆราวาส มีห้องน้ำในตัว เพื่อให้เหมาะแก่การปลีกวิเวก"
    }
]
</script>

<style>
.btn_style1 {
    font-size: 18px !important;
    color: #808284 !important;
    background-color: transparent !important;
    border-color: #808284 !important;
    padding: 20px;
    border-radius: 0px !important;
}

.btn_style1:hover {
    color: #fff !important;
    background-color: #894517 !important;
    border-color: transparent !important;
}

.btn_style2 {
    font-size: 18px !important;
    color: #fff !important;
    background-color: transparent !important;
    border-color: #fff !important;
    padding: 20px;
    border-radius: 0px !important;
}

.btn_style2:hover {
    color: #894517 !important;
    background-color: #fff !important;
    border-color: transparent !important;
}



/* navbar styles */
.el-menu {
    border: none !important;
}

.el-sub-menu.is-active .el-sub-menu__title,
.el-menu-item.is-active {
    border-bottom: 2px solid transparent !important;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}</style>