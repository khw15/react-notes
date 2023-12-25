const appPage = {
  id: {
    title: 'Dicatatin',
    nav: {
      home: 'Beranda',
      archives: 'Arsip'
    },
    msg: {
      confirm: 'Apakah anda yakin?',
      yes: 'Keluar',
      no: 'Batal',
      loading: 'Memuat data...',
      error: 'Ada kesalahan teknis. Coba lagi nanti.'
    },
    add: 'Tambah',
    cancel: 'Batal',
    delete: 'Hapus',
    archive: 'Arsipkan',
    active: 'Aktifkan',
    back: 'Kembali',
    pageNotFound: 'Halaman Tidak Ditemukan',
    // Swal for delete
    deleteTitle: 'Hapus Catatan',
    deleteText: 'Apakah anda yakin ingin menghapus catatan ini?',
    confirmDeleteButtonText: 'Hapus',
    cancelCancelButtonText: 'Batal',
    successDelete: 'Berhasil menghapus catatan!',
    // Swal for archive
    archiveTitle: 'Arsipkan Catatan',
    archiveText: 'Apakah anda yakin ingin mengarsipkan catatan ini?',
    confirmArchiveButtonText: 'Arsipkan',
    cancelButtonText: 'Batal',
    successArchive: 'Berhasil mengarsipkan catatan!',
    // Swal for unarchive
    unarchiveTitle: 'Aktifkan Catatan',
    unarchiveText: 'Apakah anda yakin ingin mengaktifkan catatan ini?',
    confirmUnarchiveButtonText: 'Aktifkan'
  },
  en: {
    title: 'Dicatatin',
    nav: {
      home: 'Home',
      archives: 'Archives'
    },
    msg: {
      confirm: 'Are you sure?',
      yes: 'Logout',
      no: 'Cancel',
      loading: 'Loading...',
      error: 'Error. Try again later.'
    },
    add: 'Add',
    cancel: 'Cancel',
    delete: 'Delete',
    archive: 'Archive',
    active: 'Active',
    back: 'Back',
    pageNotFound: 'Page Not Found',
    // Swal for delete
    deleteTitle: 'Delete Note',
    deleteText: 'Are you sure you want to delete this note?',
    confirmDeleteButtonText: 'Delete',
    cancelCancelButtonText: 'Cancel',
    successDelete: 'Successfully delete note!',
    // Swal for archive
    archiveTitle: 'Archive Note',
    archiveText: 'Are you sure you want to archive this note?',
    confirmArchiveButtonText: 'Archive',
    cancelArchiveButtonText: 'Cancel',
    successArchive: 'Successfully archive note!'
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
      yes: '로그아웃',
      no: '취소',
      loading: '로딩 중...',
      error: '기술적 오류가 발생했습니다. 나중에 다시 시도하십시오.'
    },
    add: '추가',
    cancel: '취소',
    delete: '삭제',
    archive: '보관됨',
    active: '활성화',
    back: '뒤로',
    pageNotFound: '페이지를 찾을 수 없습니다',
    // Swal for delete
    deleteTitle: '노트 삭제',
    deleteText: '이 노트를 삭제하시겠습니까?',
    confirmDeleteButtonText: '삭제',
    cancelCancelButtonText: '취소',
    successDelete: '노트가 성공적으로 삭제되었습니다!',
    // Swal for archive
    archiveTitle: '노트 보관',
    archiveText: '이 노트를 보관하시겠습니까?',
    confirmArchiveButtonText: '보관',
    cancelArchiveButtonText: '취소',
    successArchive: '노트가 성공적으로 보관되었습니다!'
  },
  ja: {
    title: 'Dicatatin',
    nav: {
      home: 'ホーム',
      archives: 'アーカイブ'
    },
    msg: {
      confirm: '本当によろしいですか？',
      yes: 'ログアウト',
      no: 'キャンセル',
      loading: 'データを読み込んでいます...',
      error: '技術的なエラーが発生しました。後でもう一度試してください。'
    },
    add: '追加',
    cancel: 'キャンセル',
    delete: '削除',
    archive: 'アーカイブ',
    active: 'アクティブ',
    back: '戻る',
    pageNotFound: 'ページが見つかりません',
    // Swal for delete
    deleteTitle: 'ノートの削除',
    deleteText: 'このノートを削除してもよろしいですか？',
    confirmDeleteButtonText: '削除',
    cancelCancelButtonText: 'キャンセル',
    successDelete: 'ノートの削除に成功しました！',
    // Swal for archive
    archiveTitle: 'ノートのアーカイブ',
    archiveText: 'このノートをアーカイブしてもよろしいですか？',
    confirmArchiveButtonText: 'アーカイブ',
    cancelButtonText: 'キャンセル',
    successArchive: 'ノートのアーカイブに成功しました！',
    // Swal for unarchive
    unarchiveTitle: 'ノートのアクティブ化',
    unarchiveText: 'このノートをアクティブにしてもよろしいですか？',
    confirmUnarchiveButtonText: 'アクティブにする'
  },
  zh: {
    title: 'Dicatatin',
    nav: {
      home: '家',
      archives: '档案'
    },
    msg: {
      confirm: '你确定吗？',
      yes: '登出',
      no: '取消',
      loading: '正在加载...',
      error: '错误。稍后再试。'
    },
    add: '加',
    cancel: '取消',
    delete: '删除',
    archive: '存档',
    active: '活性',
    back: '背部',
    pageNotFound: '找不到网页',
    // Swal for delete
    deleteTitle: '删除笔记',
    deleteText: '您确定要删除此笔记吗？',
    confirmDeleteButtonText: '删除',
    cancelCancelButtonText: '取消',
    successDelete: '成功删除笔记！',
    // Swal for archive
    archiveTitle: '存档笔记',
    archiveText: '您确定要存档此笔记吗？',
    confirmArchiveButtonText: '存档',
    cancelArchiveButtonText: '取消',
    successArchive: '成功存档笔记！',
    // Swal for unarchive
    unarchiveTitle: '激活笔记',
    unarchiveText: '您确定要激活此笔记吗？',
    confirmUnarchiveButtonText: '激活'
  }
}

const loginPage = {
  id: {
    header: 'Masuk untuk menggunakan Dicatatin',
    footer: 'Belum punya akun?',
    footerRegisterLink: 'Daftar',
    login: 'Masuk',
    email: 'Email',
    password: 'Kata Sandi',
    loading: 'Memuat...'
  },
  en: {
    header: 'Login to use Dicatatin',
    footer: 'Don\'t have an account?',
    footerRegisterLink: 'Register',
    login: 'Login',
    email: 'Email',
    password: 'Password',
    loading: 'Loading...'
  },
  ko: {
    header: 'Dicatatin을 사용하려면 로그인하세요',
    footer: '계정이 없으신가요?',
    footerRegisterLink: '회원가입',
    login: '로그인',
    email: '이메일',
    password: '비밀번호',
    loading: '로딩 중...'
  },
  ja: {
    header: 'Dicatatinを利用するにはログインしてください',
    footer: 'アカウントをお持ちでないですか？',
    footerRegisterLink: '登録',
    login: 'ログイン',
    email: '電子メール',
    password: 'パスワード',
    loading: '読み込み中...'
  },
  zh: {
    header: '登录以使用Dicatatin',
    footer: '没有帐号？',
    footerRegisterLink: '注册',
    login: '登录',
    email: '电子邮件',
    password: '密码',
    loading: '正在加载...'
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
    loading: 'Memuat...',
    msg: {
      registerSuccess: 'Akun berhasil dibuat',
      confirmPasswordMismatch: 'Kata sandi tidak cocok'
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
    loading: 'Loading...',
    msg: {
      registerSuccess: 'Account created successfully',
      confirmPasswordMismatch: 'Password mismatch'
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
    loading: '로딩 중...',
    msg: {
      registerSuccess: '계정이 성공적으로 만들어졌습니다',
      confirmPasswordMismatch: '비밀번호가 일치하지 않습니다'
    }
  },
  ja: {
    header: 'アカウントを作成するにはすべてのフォームに記入してください',
    footer: 'すでにアカウントをお持ちですか？',
    footerLoginLink: 'ログイン',
    name: '名前',
    email: '電子メール',
    password: 'パスワード',
    confirm: 'パスワードの確認',
    register: '登録',
    loading: '読み込み中...',
    msg: {
      registerSuccess: 'アカウント作成成功',
      confirmPasswordMismatch: 'パスワードが一致しません'
    }
  },
  zh: {
    header: '填写整个表格以创建帐户',
    footer: '已经有帐号了？',
    footerLoginLink: '在这里登录',
    name: '名称',
    email: '电子邮件',
    password: '密码',
    confirm: '确认密码',
    register: '寄存器',
    loading: '正在加载...',
    msg: {
      registerSuccess: '帐户创建成功',
      confirmPasswordMismatch: '密码不匹配'
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
  },
  ja: {
    header: 'アクティブノート',
    searchPlaceholder: 'タイトルで検索...',
    empty: 'ノートはありません'
  },
  zh: {
    header: '活跃笔记',
    searchPlaceholder: '按标题搜索...',
    empty: '没有笔记'
  }
}

const notesNewPage = {
  id: {
    titlePlaceholder: 'Judul',
    bodyPlaceholder: 'Isi Catatan',
    addTitle: 'Catatan Berhasil Ditambahkan',
    addErrorTitle: 'Catatan Gagal Ditambahkan'
  },
  en: {
    titlePlaceholder: 'Title',
    bodyPlaceholder: 'Notes Content',
    addTitle: 'Note Successfully Added',
    addErrorTitle: 'Note Failed to Add'
  },
  ko: {
    titlePlaceholder: '제목',
    bodyPlaceholder: '내용하기',
    addTitle: '추가되었습니다',
    addErrorTitle: '추가하지 못했습니다'
  },
  ja: {
    titlePlaceholder: 'タイトル',
    bodyPlaceholder: 'ノートの内容',
    addTitle: 'ノートが正常に追加されました',
    addErrorTitle: 'ノートの追加に失敗しました'
  },
  zh: {
    titlePlaceholder: '标题',
    bodyPlaceholder: '笔记内容',
    addTitle: '笔记成功添加',
    addErrorTitle: '笔记添加失败'
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
  },
  ja: {
    notFound: 'ノートが見つかりません'
  },
  zh: {
    notFound: '找不到笔记'
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
  },
  ja: {
    header: 'アーカイブされたノート'
  },
  zh: {
    header: '已归档笔记'
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
