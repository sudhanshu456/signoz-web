'use client'

import Image from 'next/image'

interface Author {
  name: string
  title: string
  url: string
  image_url: string
}

interface AuthorInterface {
  [key: string]: {
    name: string
    title: string
    url: string
    image_url: string
  }
}

const Authors: AuthorInterface = {
  ankit_anand: {
    name: 'Ankit Anand',
    title: 'SigNoz Team',
    url: 'https://github.com/ankit01-oss',
    image_url: 'https://signoz.io/img/users/ankit-anand.webp',
  },
  vishal: {
    name: 'Vishal Sharma',
    title: 'SigNoz Team',
    url: 'https://github.com/makeavish',
    image_url: 'https://signoz.io/img/users/vishal-sharma.webp',
  },
  pranay: {
    name: 'Pranay Prateek',
    title: 'SigNoz Team',
    url: 'https://github.com/pranay01',
    image_url: 'https://signoz.io/img/authors/pranay_profile_pic.webp',
  },
  ankit_nayan: {
    name: 'Ankit Nayan',
    title: 'SigNoz Team',
    url: 'https://github.com/ankitnayan',
    image_url: 'https://avatars.githubusercontent.com/u/12460410?v=4',
  },
  selva: {
    name: 'Selvaganesh',
    title: 'SigNoz Community',
    url: 'https://github.com/ganny26',
    image_url: 'https://signoz.io/img/authors/selva_profile_pic.webp',
  },
  vaishnavi: {
    name: 'Vaishnavi Abirami',
    title: 'SigNoz Community',
    url: 'https://github.com/vaish1707',
    image_url: 'https://signoz.io/img/authors/vaishnavi_profile_pic.webp',
  },
  pranshu: {
    name: 'Pranshu Chittora',
    title: 'SigNoz Team',
    url: 'https://github.com/pranshuchittora',
    image_url: 'https://signoz.io/img/authors/pranshu.webp',
  },
  nitya: {
    name: 'Nityananda Gohain',
    title: 'SigNoz Team',
    url: 'https://github.com/nityanandagohain',
    image_url: 'https://signoz.io/img/authors/nitya_profile_pic.webp',
  },
  sai_deepesh: {
    name: 'Sai Deepesh',
    title: 'SigNoz Community',
    url: 'https://github.com/saideepesh000',
    image_url: 'https://signoz.io/img/authors/sai_deepesh_profile.jpeg',
  },
  srikanth: {
    name: 'Srikanth Chekuri',
    title: 'SigNoz Team',
    url: 'https://github.com/srikanthccv',
    image_url: 'https://signoz.io/img/authors/srikanth_profile.webp',
  },
  ricardo: {
    name: 'Ricardo Paiva',
    title: 'SigNoz Community',
    url: 'https://github.com/ricardoccpaiva',
    image_url: 'https://signoz.io/img/authors/ricardo_profile_pic.webp',
  },
  palash: {
    name: 'Palash Gupta',
    title: 'SigNoz Team',
    url: 'https://github.com/palash-signoz',
    image_url: 'https://signoz.io/img/authors/palash_gupta_profile.webp',
  },
  bhupesh: {
    name: 'Bhupesh Varshney',
    title: 'SigNoz Community',
    url: 'https://github.com/Bhupesh-V',
    image_url: 'https://signoz.io/img/authors/bhupesh_varshney_profile_pic.webp',
  },
  ezz: {
    name: 'Ezz El Din Abdullah',
    title: 'SigNoz Community',
    url: 'https://www.linkedin.com/in/ezzeddinabdullah/',
    image_url: 'https://signoz.io/img/authors/ezz_profile_pic.webp',
  },
  naman: {
    name: 'Naman Jain',
    title: 'SigNoz Community',
    url: 'https://twitter.com/JainNaman18',
    image_url: 'https://signoz.io/img/authors/naman_jain_profile.webp',
  },
  chenna: {
    name: 'Chenna Raidu D',
    title: 'SigNoz Community',
    url: 'https://github.com/dchennaraidu',
    image_url: 'https://signoz.io/img/authors/dchennaraidu_profile_image.webp',
  },
  prashant: {
    name: 'Prashant Shahi',
    title: 'SigNoz Team',
    url: 'https://github.com/prashant-shahi',
    image_url: 'https://signoz.io/img/authors/prashant_profile_pic.webp',
  },
  daniel: {
    name: 'Favour Daniel',
    title: 'SigNoz Community',
    url: 'https://github.com/FavourDaniel',
    image_url: 'https://signoz.io/img/authors/favour_daniel_profile_pic.webp',
  },
  muskan: {
    name: 'Muskan Paliwal',
    title: 'SigNoz Community',
    url: 'https://www.linkedin.com/in/muskanpaliwal',
    image_url: 'https://signoz.io/img/authors/muskan_paliwal_profile.webp',
  },
  tau: {
    name: 'Taurai. M',
    title: 'SigNoz Community',
    url: 'https://github.com/rusiqe',
    image_url: 'https://signoz.io/img/authors/tau_profile_pic.webp',
  },
  utkarsh_chourasia: {
    name: 'Utkarsh Chourasia',
    title: 'SigNoz Community',
    url: 'https://www.utkarshchourasia.in/',
    image_url: 'https://signoz.io/img/authors/utkarsh_profile.webp',
  },
  vinayak: {
    name: 'Vinayak Pandey',
    title: 'SigNoz Community',
    url: 'https://www.linkedin.com/in/vinayakpandeyit/',
    image_url: 'https://signoz.io/img/authors/vinayak_pandey_profile.webp',
  },
  priyansh: {
    name: 'Priyansh Khodiyar',
    title: 'SigNoz Community',
    url: 'https://github.com/zriyansh',
    image_url: 'https://signoz.io/img/authors/priyansh.webp',
  },
  satyam: {
    name: 'Satyam Tripathi',
    title: 'SigNoz Community',
    url: 'https://github.com/triposat',
    image_url: 'https://signoz.io/img/authors/satyam_tripathi_profile.webp',
  },
  judy: {
    name: 'Judy Nduati',
    title: 'SigNoz Community',
    url: 'https://github.com/JudyNduati',
    image_url: 'https://signoz.io/img/authors/judy-avatar.webp',
  },
  joseph: {
    name: 'Joseph Chege',
    title: 'SigNoz Community',
    url: 'https://www.linkedin.com/in/joseph-chege-b040a4203/',
    image_url: 'https://signoz.io/img/authors/joseph_chege.webp',
  },
  nitin: {
    name: 'Nitin Rohidas',
    title: 'SigNoz Community',
    url: 'https://www.linkedin.com/in/nitin-rohidas-00408bb/',
    image_url: 'https://signoz.io/img/authors/nitin_rohidas.jpeg',
  },
  vivek_sonar: {
    name: 'Vivek Sonar',
    title: 'SigNoz Community',
    url: 'https://www.linkedin.com/in/vivek-sonar-266b2417b/',
    image_url: 'https://signoz.io/img/authors/vivek_sonar.webp',
  },
  tiago: {
    name: 'Tiago Dias Generoso',
    title: 'SigNoz Community',
    url: 'https://www.linkedin.com/in/tiago-dias-generoso/',
    image_url: 'https://signoz.io/img/authors/tiago.webp',
  },
  adnan: {
    name: 'Adnan Selimović',
    title: 'SigNoz Community',
    url: 'https://www.linkedin.com/in/qdnqn/',
    image_url: 'https://signoz.io/img/authors/adnan_profile_pic.jpeg',
  },
  vinoth: {
    name: 'Vinoth R.',
    title: 'SigNoz Community',
    url: 'https://www.linkedin.com/in/vinoth247/',
    image_url: 'https://signoz.io/img/authors/vinoth_r_profile.jpeg',
  },
  kshitij: {
    name: 'Kshitij Gang',
    title: 'SigNoz Community',
    url: 'https://www.linkedin.com/in/kshitij-gang-ba6639191/',
    image_url: 'https://signoz.io/img/authors/kshitij_profile_pic.jpeg',
  },
  nicamellifera: {
    name: 'Nočnica Mellifera',
    title: 'SigNoz Developer Relations',
    url: 'https://github.com/serverless-mom',
    image_url: 'https://signoz.io/img/authors/nica_profile.jpeg',
  },
  sayanta: {
    name: 'Sayanta Banerjee',
    title: 'SigNoz Community',
    url: 'https://www.github.com/Sayanta66',
    image_url: 'https://signoz.io/img/authors/sayanta.webp',
  },
  adnanrahic: {
    name: 'Adnan Rahic',
    title: 'SigNoz Community',
    url: 'https://www.github.com/adnanrahic',
    image_url: 'https://signoz.io/img/authors/adnanrahic.webp',
  },
  deepam: {
    name: 'Deepam Kapur',
    title: 'SigNoz Community',
    url: 'https://www.linkedin.com/in/deepam-kapur/',
    image_url: 'https://signoz.io/img/authors/deepam.webp',
  },
  'abhishek-policepatil': {
    name: 'Abhishek Policepatil',
    title: 'SigNoz Community',
    url: 'https://www.linkedin.com/in/abhishek-policepatil-62188381/',
    image_url: 'https://signoz.io/img/authors/abhishek-policepatil.webp',
  },
  'abhishek-kothari': {
    name: 'Abhishek Kothari',
    title: 'SigNoz Community',
    url: 'https://www.linkedin.com/in/datsabk/',
    image_url: 'https://signoz.io/img/authors/abhishek-kothari.webp',
  },
  'leigh-finch': {
    name: 'Leigh Finch',
    title: 'SigNoz Community',
    url: 'https://www.linkedin.com/in/leigh-finch-45a1a34/',
    image_url: 'https://signoz.io/img/authors/leigh-finch.webp',
  },
  jaikanth: {
    name: 'Jaikanth J',
    title: 'SigNoz Community',
    url: 'https://github.com/jaikanthjay46',
    image_url: 'https://signoz.io/img/authors/jaikanth.webp',
  },
  ashok: {
    name: 'Ashok Nagaraj',
    title: 'SigNoz Community',
    url: 'https://github.com/ashok-an/',
    image_url: 'https://signoz.io/img/authors/ashok.webp',
  },
  debanjan: {
    name: 'Debanjan Choudhury',
    title: 'SigNoz Community',
    url: 'https://twitter.com/theybanjan/',
    image_url: 'https://signoz.io/img/authors/debanjan.jpg',
  },
  'dejan-lukic': {
    name: 'Dejan Lukić',
    title: 'SigNoz Community',
    url: 'https://github.com/lukiccd',
    image_url: 'https://signoz.io/img/authors/dejan-lukic.webp',
  },
  harish: {
    name: 'Harish R',
    title: 'SigNoz Community',
    url: 'https://www.linkedin.com/in/harishteens/',
    image_url: 'https://signoz.io/img/authors/harish.webp',
  },
  gargi: {
    name: 'Gargi Ghosal',
    title: 'SigNoz Community',
    url: 'https://www.linkedin.com/in/gargighosal/',
    image_url: 'https://signoz.io/img/authors/gargi.webp',
  },
}

export default function AuthorInfo({ author }: { author: string }) {
  const handelAuthorClick = () => {
    window.open(Authors[author]?.url, '_blank')
  }

  return (
    <div className="author-info my-2 flex items-center gap-4" onClick={handelAuthorClick}>
      <Image
        className="m-0 rounded-full"
        src={Authors[author]?.image_url}
        alt="Rounded avatar"
        width={30}
        height={30}
      />

      <div className="author-name-team">
        <h4 className="mt-0 capitalize text-stone-700 dark:text-white">{Authors[author]?.name}</h4>
      </div>
    </div>
  )
}
