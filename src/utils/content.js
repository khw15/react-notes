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
    pageNotFound: 'Halaman Tidak Ditemukan.'
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
      archives: '보관됨',
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
    archive: '아카이브',
    active: '활성화',
    back: '뒤로',
    pageNotFound: '페이지를 찾을 수 없습니다.'
  }
}

const loginPage = {
  id: {
    header: 'Login untuk menggunakan Dicatatin',
    footer: 'Belum punya akun?',
    footerRegisterLink: 'Daftar disini',
    login: 'Masuk',
    email: 'Email',
    password: 'Kata Sandi'
  },
  en: {
    header: 'Login to use app, please.',
    footer: 'Don\'t have an account?',
    footerRegisterLink: 'Register here',
    login: 'Login',
    email: 'Email',
    password: 'Password'
  },
  ko: {
    header: 'Dicatatin을 사용하려면 로그인하세요.',
    footer: '계정이 없으신가요?',
    footerRegisterLink: '여기에서 등록',
    login: '로그인',
    email: '이메일',
    password: '비밀번호'
  }
}

const registerPage = {
  id: {
    header: 'Isi form untuk mendaftar akun.',
    footer: 'Sudah punya akun?',
    footerLoginLink: 'Login disini',
    msg: {
      registerSuccess: 'Akun berhasil dibuat. Silahkan login.'
    }
  },
  en: {
    header: 'Fill the form to register account.',
    footer: 'Already have an account?',
    footerLoginLink: 'Login here',
    msg: {
      registerSuccess: 'User created successfully.'
    }
  },
  ko: {
    header: '계정을 등록하려면 양식을 작성하세요.',
    footer: '이미 계정이 있으신가요?',
    footerLoginLink: '여기에서 로그인',
    msg: {
      registerSuccess: '계정이 성공적으로 생성되었습니다. 로그인하세요.'
    }
  }
}

const notePage = {
  id: {
    header: 'Catatan Aktif',
    searchPlaceholder: 'Cari berdasarkan judul ...',
    empty: 'Tidak ada catatan.'
  },
  en: {
    header: 'Active Notes',
    searchPlaceholder: 'Search by title ...',
    empty: 'Empty.'
  },
  ko: {
    header: '활성 노트',
    searchPlaceholder: '제목으로 검색 ...',
    empty: '노트가 없습니다.'
  }
}

const notesNewPage = {
  id: {
    titlePlaceholder: 'Judul',
    bodyPlaceholder: '<b><i><u>Isi Catatan</u></i></b>',
    msgSuccess: 'Berhasil menambahkan catatan!'
  },
  en: {
    titlePlaceholder: 'Title',
    bodyPlaceholder: '<b><i><u>Notes Content</u></i></b>',
    msgSuccess: 'Successfully add notes!'
  },
  ko: {
    titlePlaceholder: '제목',
    bodyPlaceholder: '<b><i><u>노트 내용</u></i></b>',
    msgSuccess: '노트가 성공적으로 추가되었습니다!'
  }
}

const notesIdPage = {
  id: {
    notFound: 'Catatan tidak ditemukan.'
  },
  en: {
    notFound: 'Not Found.'
  },
  ko: {
    notFound: '노트를 찾을 수 없습니다.'
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
