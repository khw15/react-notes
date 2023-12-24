const appPage = {
  id: {
    title: 'Dicatatin',
    nav: {
      home: 'Beranda',
      archives: 'Arsip'
    },
    msg: {
      confirm: 'Apakah anda yakin?',
      loading: 'Memuat data...',
      error: 'Ada kesalahan teknis. Coba lagi nanti.'
    },
    add: 'Tambah',
    cancel: 'Batal',
    delete: 'Hapus',
    archive: 'Arsipkan',
    active: 'Aktifkan',
    back: 'Kembali',
    pageNotFound: 'Halaman Tidak Ditemukan'
  },
  en: {
    title: 'Dicatatin',
    nav: {
      home: 'Home',
      archives: 'Archives'
    },
    msg: {
      confirm: 'Are you sure?',
      loading: 'Loading...',
      error: 'Error. Try again later.'
    },
    add: 'Add',
    cancel: 'Cancel',
    delete: 'Delete',
    archive: 'Archive',
    active: 'Active',
    back: 'Back',
    pageNotFound: 'Page Not Found'
  },
  ko: {
    title: 'Dicatatin',
    nav: {
      home: '홈',
      archives: '보관',
      korean: '한국어'
    },
    msg: {
      confirm: '확실합니까?',
      loading: '로딩 중...',
      error: '기술적 오류가 발생했습니다. 나중에 다시 시도하십시오.'
    },
    add: '추가',
    cancel: '취소',
    delete: '삭제',
    archive: '보관됨',
    active: '활성화',
    back: '뒤로',
    pageNotFound: '페이지를 찾을 수 없습니다'
  }
}

const loginPage = {
  id: {
    header: 'Masuk untuk menggunakan Dicatatin',
    footer: 'Belum punya akun?',
    footerRegisterLink: 'Daftar',
    login: 'Masuk',
    email: 'Email',
    password: 'Kata Sandi'
  },
  en: {
    header: 'Login to use app, please',
    footer: 'Don\'t have an account?',
    footerRegisterLink: 'Register',
    login: 'Login',
    email: 'Email',
    password: 'Password'
  },
  ko: {
    header: 'Dicatatin을 사용하려면 로그인하세요',
    footer: '계정이 없으신가요?',
    footerRegisterLink: '회원가입',
    login: '로그인',
    email: '이메일',
    password: '비밀번호'
  }
}

const registerPage = {
  id: {
    header: 'Isi seluruh form untuk membuat akun',
    footer: 'Sudah punya akun?',
    footerLoginLink: 'Masuk di sini',
    name: 'Nama',
    email: 'Email',
    password: 'Kata Sandi',
    confirm: 'Konfirmasi Kata Sandi',
    register: 'Daftar',
    msg: {
      registerSuccess: 'Akun berhasil dibuat'
    }
  },
  en: {
    header: 'Fill out the entire form to create an account',
    footer: 'Already have an account?',
    footerLoginLink: 'Login here',
    name: 'Name',
    email: 'Email',
    password: 'Password',
    confirm: 'Confirm Password',
    register: 'Register',
    msg: {
      registerSuccess: 'Account created successfully'
    }
  },
  ko: {
    header: '계정을 등록하려면 양식을 작성하세요',
    footer: '이미 계정이 있으신가요?',
    footerLoginLink: '로그인하기',
    name: '이름',
    email: '이메일',
    password: '비밀번호',
    confirm: '비밀번호 확인',
    register: '회원하기',
    msg: {
      registerSuccess: '계정이 성공적으로 만들어졌습니다'
    }
  }
}

const notePage = {
  id: {
    header: 'Catatan Aktif',
    searchPlaceholder: 'Cari berdasarkan judul...',
    empty: 'Tidak ada catatan'
  },
  en: {
    header: 'Active Notes',
    searchPlaceholder: 'Search by title...',
    empty: 'There are no notes'
  },
  ko: {
    header: '활성 노트',
    searchPlaceholder: '제목으로 검색...',
    empty: '노트가 없습니다'
  }
}

const notesNewPage = {
  id: {
    titlePlaceholder: 'Judul',
    bodyPlaceholder: 'Isi Catatan',
    msgSuccess: 'Berhasil menambahkan catatan!'
  },
  en: {
    titlePlaceholder: 'Title',
    bodyPlaceholder: 'Notes Content',
    msgSuccess: 'Successfully add notes!'
  },
  ko: {
    titlePlaceholder: '제목',
    bodyPlaceholder: '내용하기',
    msgSuccess: '노트가 성공적으로 추가되었습니다!'
  }
}

const notesIdPage = {
  id: {
    notFound: 'Catatan tidak ditemukan'
  },
  en: {
    notFound: 'Note not found'
  },
  ko: {
    notFound: '노트를 찾을 수 없습니다'
  }
}

const archivePage = {
  id: {
    header: 'Catatan Arsip'
  },
  en: {
    header: 'Archived Notes'
  },
  ko: {
    header: '보관된 노트'
  }
}

const content = {
  appPage,
  loginPage,
  registerPage,
  notePage,
  notesNewPage,
  notesIdPage,
  archivePage
}

export {
  appPage,
  loginPage,
  registerPage,
  notePage,
  notesNewPage,
  notesIdPage,
  archivePage
}

export default content
