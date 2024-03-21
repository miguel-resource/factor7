import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import { CommonWrapper } from "@/components/Common/Wrapper";
import { ListFAQ } from '../../components/ListFAQ';

export default function FAQPage() {
  return (
    <CommonWrapper>
      <section className="text-gray-600 body-font py-20">
        <ListFAQ/>
      </section>
    </CommonWrapper>
  );
}
